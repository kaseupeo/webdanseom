package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: WorkServiceImpl.java
 * 설명:
 * 작성일자:2022.06.04
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Nurse;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.Work;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.repo.NurseRepository;
import com.webdanseom.nurseonduty.repo.WorkRepository;
import com.webdanseom.nurseonduty.service.WorkService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
public class WorkServiceImpl implements WorkService {

    @Autowired
    private WorkRepository workRepository;

    @Autowired
    private NurseGroupRepository nurseGroupRepository;

    @Autowired
    private NurseRepository nurseRepository;

    /**
     * 근무 등록
     * @param work
     * @throws Exception
     */
    @Override
    @Transactional
    public void addWork(Work work) throws Exception {
        if (work.getNurse()==null) throw new NotFoundException("간호사정보가 없습니다.");
        if (work.getNurseGroup()==null) throw new NotFoundException("그룹정보가 없습니다.");
        workRepository.save(work);
    }

    /**
     * 근무표 조회 - 수간호사용
     * @param nurseGroupSeq
     * @param date
     * @return
     * @throws Exception
     */
    @Override
    public List<Work> selectGroupWork(int nurseGroupSeq, Date date) throws Exception {
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(nurseGroupSeq);
        if (nurseGroup==null) throw new NotFoundException("그룹정보가 없습니다.");
        List<Work> workList = workRepository.findGroupWork(nurseGroupSeq, date);
        return workList;
    }

    /**
     * 근무표 조회 - 일반간호사용
     * @param nurseSeq
     * @param date
     * @return
     * @throws Exception
     */
    @Override
    public List<Work> selectNurseWork(int nurseSeq, Date date) throws Exception {
        Nurse nurse = nurseRepository.findByNurseSeq(nurseSeq);
        if (nurse==null) throw new NotFoundException("간호사정보가 없습니다.");
        List<Work> workList = workRepository.findByNurseNurseSeq(nurseSeq);
        return workList;
    }
}
