package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: OauthController.java
 * 설명: 소셜로 회원가입, 로그인
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자: 2022.05.10
 * 수정자:표영운
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.RequestSocialData;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.RedisUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/oauth")
public class OauthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private RedisUtil redisUtil;

    @PostMapping("/signup/naver")
    public Response signUpNaverUser(
            @RequestBody RequestSocialData socialData
            ) {
        Response response;
        try {
            authService.signUpSocialUser(socialData);
            response = new Response("success", "성공적으로 회원가입을 완료했습니다.", null);
        } catch (Exception e) {
            response = new Response("error", "회원가입 실패했습니다.", e.getMessage());
        }
        return response;
    }

    @GetMapping("/login/naver")
    public Response loginNaverUser(
            @RequestBody RequestSocialData socialData, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse
    ) {
        Response response;
        try {
            final Member member = authService.loginSocialUser(socialData.getEmail(), socialData.getType());
            final String token = jwtUtil.generateToken(member);
            final String refreshJwt = jwtUtil.generateRefreshToken(member);
            Cookie accessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN_NAME, token);
            Cookie refreshToken = cookieUtil.createCookie(JwtUtil.REFRESH_TOKEN_NAME, refreshJwt);
            redisUtil.setDataExpire(refreshJwt, member.getEmail(), JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND);
            httpServletResponse.addCookie(accessToken);
            httpServletResponse.addCookie(refreshToken);
            response = new Response("success", "로그인에 성공했습니다.", token);
        } catch (Exception e) {
            response = new Response("error", "로그인에 실패했습니다.", e.getMessage());
        }
        return response;
    }
}
