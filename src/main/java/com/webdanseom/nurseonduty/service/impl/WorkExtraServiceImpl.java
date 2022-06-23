package com.webdanseom.nurseonduty.service.impl;

import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.WorkExtra;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.repo.WorkExtraRepository;
import com.webdanseom.nurseonduty.service.WorkExtraService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class WorkExtraServiceImpl implements WorkExtraService {

    @Autowired
    private WorkExtraRepository workExtraRepository;

    @Autowired
    private NurseGroupRepository nurseGroupRepository;


    /**
     * 임시근무 등록 및 수정
     * @param workExtra
     * @throws NotFoundException
     * */
    @Override
    public void addWorkExtra(WorkExtra workExtra) throws NotFoundException {
        if(workExtra.getNurse() == null) throw new NotFoundException("workExtraAdd(), 간호사정보가 없습니다.");
        if(workExtra.getNurseGroup() == null) throw new NotFoundException("addWorkExtra(), 그룹정보가 없습니다.");
        WorkExtra beforeWork = workExtraRepository.findByDateAndNurseNurseSeqAndNurseGroupSeq(workExtra.getDate(),
                workExtra.getNurse().getNurseSeq(), workExtra.getNurseGroup().getSeq());
        if(workExtra == null) workExtra.setWorkExtraSeq(beforeWork.getWorkExtraSeq());
        workExtraRepository.save(workExtra);
    }

    /**
     * 임시근무조회
     * @param nurseGroupSeq
     * @return workExtra
     * @throws NotFoundException
     * */
    @Override
    public List<WorkExtra> selectWorkExtraList(int nurseGroupSeq, Date date) throws NotFoundException {
        List<WorkExtra> workExtra = workExtraRepository.findByNurseGroupSeq(nurseGroupSeq);
        if(workExtra == null) throw new NotFoundException("selectWorkExtra(), 임시근무가 없습니다.");
        List<WorkExtra> workExtraList = workExtraRepository.findGroupWorkExtra(nurseGroupSeq, date);
        return workExtra;
    }

    /**
     * 임시근무삭제
     * @param nurseGroupSeq
     * @throws Exception
     * */
    @Override
    public void deleteWorkExtra(int nurseGroupSeq) throws Exception {
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(nurseGroupSeq);
        if(nurseGroup == null) throw new NotFoundException("deleteWorkExtra(), 그룹정보가 없습니다.");
        List<WorkExtra> workExtraList = workExtraRepository.findByNurseGroupSeq(nurseGroupSeq);
        for(int i = 0; i < workExtraList.size(); i++)
            workExtraRepository.delete(workExtraList.get(i));
    }

    /**
     * 임시근무 해당 요일만 삭제
     * @param nurseGroupSeq,
     * @throws Exception
     * */
    @Override
    public void deleteWorkExtra(int nurseGroupSeq, Date date) throws NotFoundException {
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(nurseGroupSeq);
        if(nurseGroup == null) throw new NotFoundException("delecteWorkExtra(seq,date), 그룹정보가 없습니다.");
        List<WorkExtra> workExtraList = workExtraRepository.findGroupWorkExtra(nurseGroupSeq, date);
        for(int i = 0; i < workExtraList.size(); i++)
            workExtraRepository.delete(workExtraList.get(i));
    }
}
