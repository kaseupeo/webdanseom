package com.webdanseom.nurseonduty.controller;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.NurseService;
import com.webdanseom.nurseonduty.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@RestController
public class TestController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private AuthService authService;

    @Autowired
    private NurseService nurseService;

    @Autowired
    private WorkService workService;

    @GetMapping("home")
    public List<String> getHome(){
        return Arrays.asList("스프링 리액트 연동 테스트", "test");
    }


    @DeleteMapping("/test")
    public Response test(HttpServletRequest httpServletRequest,
                         HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            workService.deleteWork(member.getGroupSeq().getSeq());

            return new Response("success", "근무 조회 성공", null);
        } catch (Exception e) {
            return new Response("error", "근무 조회 실패", e.getMessage());
        }
    }

}