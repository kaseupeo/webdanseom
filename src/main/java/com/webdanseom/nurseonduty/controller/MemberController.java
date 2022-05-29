package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: MemberController.java
 * 설명: 회원메뉴 처리를 실제로 실행하는 컨트롤러 파일
 *      회원가입, 로그인, 비밀번호 변경, 이메일확인, 이메일로 문자발송 기능
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자: 2022.05.12
 * 수정자:신동현
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.*;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.GroupService;
import com.webdanseom.nurseonduty.service.RedisUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Slf4j
@RestController
@RequestMapping("/member")
public class MemberController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    //그룹관련 인터페이스 호출
    @Autowired
    private GroupService groupService;

    //회원메뉴 인터페이스 호출
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
            authService.isDuplicateCheckEmail(member.getEmail());
            authService.isValidEmail(member.getEmail());
            authService.isValidPassword(member.getPassword());
            authService.isValidPhoneNumber(member.getPhoneNumber());
            authService.signUpUser(member);
            return new Response("success", "회원가입 성공", null);
        } catch (Exception e) {
            return new Response("error", "회원가입 실패", e.getMessage());
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
    public Response verify(@RequestBody RequestEmail requestEmail, HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) {
        Response response;
        try {
            Member member = authService.findByEmail(requestEmail.getEmail());
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

    //비밀번호 변경
    @PutMapping("/password")
    public Response changePassword(@RequestBody RequestLoginUser requestLoginUser) {
        Response response;
        try{
            Member member = authService.findByEmail(requestLoginUser.getEmail());
            authService.isValidPassword(requestLoginUser.getPassword());
            authService.changePassword(member,requestLoginUser.getPassword());
            response = new Response("success","성공적으로 사용자의 비밀번호를 변경했습니다.",null);
        }catch(Exception e){
            response = new Response("error","사용자의 비밀번호를 변경할 수 없었습니다.",e.getMessage());
        }
        return response;
    }

    //비밀번호 찾기
    @PostMapping("/password")
    public Response findPassword(@RequestBody RequestEmail requestEmail) {
        Response response;
        try {
            Member member = authService.findByEmail(requestEmail.getEmail());
            if (!member.getEmail().equals(requestEmail.getEmail())) throw new NoSuchFieldException("");
            authService.findPassword(member);
            response = new Response("success", "성공적으로 사용자의 비밀번호 변경요청을 수행했습니다.", null );
        } catch (NoSuchFieldException e) {
            response = new Response("error", "사용자 이메일을 조회할 수 없습니다.",  e.getMessage());
        } catch (Exception e) {
            response = new Response("error", "비밀번호 변경 요청을 할 수 없습니다.",  e.getMessage());
        }
        return response;
    }

    //회원정보 조회
    @GetMapping("/profile")
    public Response selectProfile(HttpServletRequest httpServletRequest,
                                  HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);

            Member member = authService.findByEmail(email);
            return new Response("success", "회원 정보 조회 성공", member);
        } catch (Exception e) {
            return new Response("error", "회원 정보 조회 실패", e.getMessage());
        }
    }

    //회원정보 수정
    @PutMapping("/profile")
    public Response editProfile(@RequestBody RequestEditProfile requestEditProfile) {
        Response response;
        try {
            Member member = authService.findByEmail(requestEditProfile.getEmail());
            authService.editProfile(member, requestEditProfile.getPhoneNumber());
            response = new Response("success", "성공적으로 사용자의 정보를 변경했습니다.", member);
        } catch (Exception e) {
            response = new Response("error","사용자의 정보를 변경할 수 없습니다.", null);
        }
        return response;
    }
    //회원탈퇴
    @DeleteMapping("/withdrawal")
    public Response withdrawal(@RequestBody RequestLoginUser requestLoginUser) {
        Response response;
        try {
            Member member = authService.findByEmail(requestLoginUser.getEmail());
            authService.withdrawal(member, requestLoginUser.getPassword());
            response = new Response("success", "회원탈퇴를 성공했습니다.",null);
        } catch (Exception e) {
            response = new Response("error", "회원탈퇴를 할 수 없습니다.", null);
        }
        return response;
    }

    //로그아웃
    @GetMapping("/logout")
    public Response logout(HttpServletRequest httpServletRequest,
                           HttpServletResponse httpServletResponse) {
        try {
            Cookie accessToken = cookieUtil.deleteCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            Cookie refreshToken = cookieUtil.deleteCookie(httpServletRequest, JwtUtil.REFRESH_TOKEN_NAME);
            httpServletResponse.addCookie(accessToken);
            httpServletResponse.addCookie(refreshToken);
            return new Response("success", "로그아웃 성공", accessToken.getMaxAge());
        } catch (Exception e) {
            return new Response("error", "로그아웃 실패", e.getMessage());
        }
    }
}
