package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: WorkController.java
 * 설명:
 * 작성일자:2022.06.04
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.WorkService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private WorkService workService;


}
