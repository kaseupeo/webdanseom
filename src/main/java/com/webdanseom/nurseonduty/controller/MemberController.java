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
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.*;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
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

    //비밀번호 변경
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

    //비밀번호 찾기
    @PostMapping("/password")
    public Response findPassword(@RequestBody RequestFindPassword requestFindPassword) {
        Response response;
        try {
            Member member = authService.findByEmail(requestFindPassword.getEmail());
            if (!member.getEmail().equals(requestFindPassword.getEmail())) throw new NoSuchFieldException("");
            authService.findPassword(member);
            response = new Response("success", "성공적으로 사용자의 비밀번호 변경요청을 수행했습니다.", null);
        } catch (NoSuchFieldException e) {
            response = new Response("error", "사용자 이메일을 조회할 수 없습니다.", null);
        } catch (Exception e) {
            response = new Response("error", "비밀번호 변경 요청을 할 수 없습니다.", null);
        }
        return response;
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
    public Response withdrawal(@RequestBody RequestWithdrawal requestWithdrawal) {
        Response response;
        try {
            Member member = authService.findByEmail(requestWithdrawal.getEmail());
            authService.withdrawal(member, requestWithdrawal.getPassword());
            response = new Response("success", "회원탈퇴를 성공했습니다.",null);
        } catch (Exception e) {
            response = new Response("error", "회원탈퇴를 할 수 없습니다.", null);
        }
        return response;
    }

    //그룹생성
    @PostMapping("/createGroup")
    public Response createGroup(@RequestBody NurseGroup nurseGroup, Member member) {
        try{
            authService.createGroup(nurseGroup, member);
            return new Response("success", "그룹생성 성공", null);
        }catch (Exception e) {
            return new Response("error", "그룹생성 실패", null);
        }
    }

    //그룹 초대
    @GetMapping("/inviteGroup")
    public Response inviteGroup(@RequestBody RequestInvite requestInvite) {
        try {
            String inviteLink;
            inviteLink = authService.inviteGroup(requestInvite.getSeq(), requestInvite.getInviteLink());
            return new Response("success", "그룹초대 링크: " + inviteLink, null);
        }catch (Exception e) {
            return new Response("error", "그룹초대 실패", null);
        }

    }

    //그룹가입
    @PostMapping("/join")
    public Response joinGroup(@RequestBody RequestInvite requestInvite, Member member) {
        try {
             authService.joinGroup(requestInvite.getSeq() ,requestInvite.getInviteLink(), member);
            return new Response("success", "그룹가입 성공", null);
        }catch (Exception e) {
            return new Response("error", "그룹가입 실패", null);
        }
    }

    @GetMapping("/test")
    public String test() {
        return "Hello World!";
    }

}
