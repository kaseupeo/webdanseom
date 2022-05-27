package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: PreceptorController.java
 * 설명:
 * 작성일자:2022.05.27
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Preceptor;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.PreceptorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@RequestMapping("/preceptor")
public class PreceptorController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private AuthService authService;

    @Autowired
    private PreceptorService preceptorService;

    // 관계 등록
    @PostMapping("/add")
    public Response addPreceptor(@RequestBody Preceptor preceptor,
                                 HttpServletRequest httpServletRequest,
                                 HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);

            Member member = authService.findByEmail(email);
            preceptor.setNurseGroup(member.getGroupSeq());
            preceptorService.addPreceptor(preceptor);
            return new Response("success", "관계 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "관계 등록 실패", e.getMessage());
        }
    }


}
