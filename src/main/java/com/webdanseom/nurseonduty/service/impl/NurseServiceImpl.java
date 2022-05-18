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

    /**
     * 간호사 등록
     * @param nurse
     */
    @Override
    @Transactional
    public void addNurse(Nurse nurse) {
        log.info("저장전"+nurse);
        nurseRepository.save(nurse);
        log.info("저장후");
    }

    /**
     * 간호사 목록 조회
     * @param nurseGroupSeq
     * @return
     * @throws NotFoundException
     */
    @Override
    public List<Nurse> selectNurse(int nurseGroupSeq) throws NotFoundException {
        List<Nurse> nurse = nurseRepository.findByNurseGroup(nurseGroupSeq);
        if (nurse == null) throw new NotFoundException("간호사가 조회되지 않습니다.");
        return nurse;
    }
}
