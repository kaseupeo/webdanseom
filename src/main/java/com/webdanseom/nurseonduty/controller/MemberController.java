package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: MemberControllerIntegreTest.java
 * 설명: 회원메뉴 처리를 실제로 실행하는 컨트롤러 파일
 *      회원가입, 로그인, 비밀번호 변경, 이메일확인, 이메일로 문자발송 기능
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자: 2022.05.10
 * 수정자:표영운
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.requset.RequestChangePassword;
import com.webdanseom.nurseonduty.model.requset.RequestLoginUser;
import com.webdanseom.nurseonduty.model.requset.RequestVerifyEmail;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.RedisUtil;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthService authService;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private RedisUtil redisUtil;

    //회원가입
    @PostMapping("/signup")
    public Response signUpMember(@RequestBody Member member) {
        try {
            authService.signUpUser(member);
            return new Response("success", "회원가입 성공", null);
        } catch (Exception e) {
            return new Response("error", "회원가입 실패", null);
        }
    }

    //로그인
    @PostMapping("/login")
    public Response login(@RequestBody RequestLoginUser user,
                          HttpServletRequest httpServletRequest,
                          HttpServletResponse httpServletResponse) {
        try {
            final Member member = authService.loginUser(user.getEmail(), user.getPassword());
            final String token = jwtUtil.generateToken(member);
            final String refreshJwt = jwtUtil.generateRefreshToken(member);
            Cookie accessToken = cookieUtil.createCookie(JwtUtil.ACCESS_TOKEN_NAME, refreshJwt);
            Cookie refreshToken = cookieUtil.createCookie(JwtUtil.REFRESH_TOKEN_NAME, refreshJwt);
            redisUtil.setDataExpire(refreshJwt, member.getEmail(), JwtUtil.REFRESH_TOKEN_VALIDATION_SECOND);
            httpServletResponse.addCookie(accessToken);
            httpServletResponse.addCookie(refreshToken);
            return new Response("success", "로그인 성공", token);
        } catch (Exception e) {
            return new Response("error", "로그인 실패", e.getMessage());
        }
    }
    //인증번호 보냄
    @PostMapping("/verify")
    public Response verify(@RequestBody RequestVerifyEmail requestVerifyEmail, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        Response response;
        try {
            Member member = authService.findByEmail(requestVerifyEmail.getEmail());
            authService.sendVerificationMail(member);
            response = new Response("success", "성공적으로 인증메일을 보냈습니다.", null);
        } catch (Exception e) {
            response = new Response("error", "인증메일을 보내는데 문제가 발생했습니다.", e);
        }
        return response;
    }

    //인증메일 확인
    @GetMapping("/verify/{key}")
    public Response getVerify(@PathVariable String key) {
        Response response;
        try {
            authService.verifyEmail(key);
            response = new Response("success", "성공적으로 인증메일을 확인했습니다.", null);
        } catch (Exception e) {
            response = new Response("error", "인증메일을 확인하는데 실패했습니다.", null);
        }
        return response;
    }

    //인증번호 확인
    @GetMapping("/password/{key}")
    public Response isPasswordUUIdValidate(@PathVariable String key) {
        Response response;
        try {
            if (authService.isPasswordUuidValidate(key))
                response = new Response("success", "정상적인 접근입니다.", null);
            else
                response = new Response("error", "유효하지 않은 Key 값입니다.", null);
        } catch (Exception e) {
            response = new Response("error", "유효하지 않은 key 값입니다.", null);
        }
        return response;
    }

    //비밀번호 병경
    @PutMapping("/password")
    public Response changePassword(@RequestBody RequestChangePassword requestChangePassword) {
        Response response;
        try{
            Member member = authService.findByEmail(requestChangePassword.getEmail());
            authService.changePassword(member,requestChangePassword.getPassword());
            response = new Response("success","성공적으로 사용자의 비밀번호를 변경했습니다.",null);
        }catch(Exception e){
            response = new Response("error","사용자의 비밀번호를 변경할 수 없었습니다.",null);
        }
        return response;
    }

    @GetMapping("/test")
    public String test() {
        return "Hello World!";
    }

}
