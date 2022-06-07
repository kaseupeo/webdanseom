package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: WorkServiceImpl.java
 * 설명:
 * 작성일자:2022.06.04
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Work;
import com.webdanseom.nurseonduty.repo.WorkRepository;
import com.webdanseom.nurseonduty.service.WorkService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class WorkServiceImpl implements WorkService {

    @Autowired
    private WorkRepository workRepository;

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

    @Override
    public List<Work> selectGroupWork(int nurseGroupSeq, String date) throws Exception {
        return null;
    }

    @Override
    public List<Work> selectNurseWork(int nurseSeq, String date) throws Exception {
        return null;
    }
}
