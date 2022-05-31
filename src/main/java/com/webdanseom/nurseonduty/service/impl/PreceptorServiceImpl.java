package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: PreceptorServiceImpl.java
 * 설명:
 * 작성일자:2022.05.27
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.Preceptor;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.repo.PreceptorRepository;
import com.webdanseom.nurseonduty.service.PreceptorService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class PreceptorServiceImpl implements PreceptorService {

    @Autowired
    private PreceptorRepository preceptorRepository;

    @Autowired
    private NurseGroupRepository nurseGroupRepository;

    /**
     * 관계 등록
     * @param preceptor
     * @throws Exception
     */
    @Override
    @Transactional
    public void addPreceptor(Preceptor preceptor) throws Exception {
        if (preceptor.getNurseGroup()==null) throw new Exception("그룹정보가 없습니다.");
        preceptorRepository.save(preceptor);
    }

    /**
     * 관계 목록 조회
     * @param nurseGroupSeq
     * @return
     * @throws NotFoundException
     */
    @Override
    public List<Preceptor> selectPreceptor(int nurseGroupSeq) throws NotFoundException {
        NurseGroup nurseGroup = nurseGroupRepository.findBySeq(nurseGroupSeq);
        if (nurseGroup==null) throw new NotFoundException("selectPreceptor(), 그룹/프리셉터가 조회되지 않습니다.");
        List<Preceptor> preceptors = preceptorRepository.findByNurseGroupSeq(nurseGroupSeq);
        return preceptors;
    }

    /**
     * 관계 수정
     * @param preceptor
     * @throws NotFoundException
     */
    @Override
    public void updatePreceptor(Preceptor preceptor) throws NotFoundException {
        if (preceptorRepository.findByPreceptorSeq(preceptor.getPreceptorSeq())==null) throw new NotFoundException("updatePreceptor(), 프리셉터 조회되지 않습니다.");
        preceptorRepository.save(preceptor);
    }
}
