package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: NurseServiceImpl.java
 * 설명:
 * 작성일자:2022.05.17
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Nurse;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.repo.NurseRepository;
import com.webdanseom.nurseonduty.service.NurseService;
import javassist.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@Service
public class NurseServiceImpl implements NurseService {

    @Autowired
    private NurseRepository nurseRepository;

    @Autowired
    private NurseGroupRepository nurseGroupRepository;

    /**
     * 간호사 등록
     * @param nurse
     * @throws Exception
     */
    @Override
    @Transactional
    public void addNurse(Nurse nurse) throws Exception {
        if (nurse.getNurseGroup()==null) throw new Exception("그룹정보가 없습니다.");
        nurseRepository.save(nurse);
    }

    /**
     * 간호사 조회
     * @param seq
     * @return
     * @throws NotFoundException
     */
    @Override
    public Nurse findByNurseSeq(int seq) throws NotFoundException {
        Nurse nurse = nurseRepository.findByNurseSeq(seq);
        if (nurse==null) throw new NotFoundException("간호사가 조회되지 않습니다.");
        return nurse;
    }

    /**
     * 간호사 목록 조회
     * @param nurseGroupSeq
     * @return
     * @throws NotFoundException
     */
    @Override
    public List<Nurse> selectNurse(int nurseGroupSeq) throws NotFoundException {
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(nurseGroupSeq);
        if (nurseGroup==null) throw new NotFoundException("간호사가 조회되지 않습니다.");
        List<Nurse> nurse = nurseRepository.findByNurseGroupSeq(nurseGroupSeq);
        return nurse;
    }

    /**
     * 간호사 정보 수정
     * @param nurse
     * @throws NotFoundException
     */
    @Override
    public void editNurse(Nurse nurse) throws NotFoundException {
        if (nurseRepository.findByNurseSeq(nurse.getNurseSeq())==null) throw new NotFoundException("editNurse(), 회원이 조회되지 않습니다.");
        nurseRepository.save(nurse);
    }

    /**
     * 간호사 정보 삭제
     * @param nurse
     * @throws Exception
     */
    @Override
    public void deleteNurse(Nurse nurse) throws Exception {
        if (nurse==null) throw new NotFoundException("deleteNurse(), 간호사가 조회되지 않습니다.");
        nurseRepository.delete(nurse);
    }
}
