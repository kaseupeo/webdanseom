package com.webdanseom.nurseonduty.controller;

import com.webdanseom.nurseonduty.service.DutyService;
import com.webdanseom.nurseonduty.service.GroupService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/duty")
public class DutyController {
    @Autowired
    private GroupService groupService;

    @Autowired
    private DutyService dutyService;

    //듀티추가
    //초기화
    //듀티삭제
    //듀티수정

}
