package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: WorkServiceImpl.java
 * 설명:
 * 작성일자:2022.06.04
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
import com.webdanseom.nurseonduty.repo.WorkRepository;
import com.webdanseom.nurseonduty.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkServiceImpl implements WorkService {

    @Autowired
    private WorkRepository workRepository;
}
