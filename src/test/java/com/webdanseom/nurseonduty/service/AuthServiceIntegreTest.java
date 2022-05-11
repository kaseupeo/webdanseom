package com.webdanseom.nurseonduty.service;

/**
 * 파일명: AuthServiceIntegreTest.java
 * 설명: 회원 가입, 로그인,이메일 전체 보내기 테스트
 * 작성일자:2022.05.10
 * 작성자:표영운
 * 수정일자: 2022.05.10
 * 수정자:표영운
 */

import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.request.RequestLoginUser;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;

@Slf4j
@Transactional
@SpringBootTest
public class AuthServiceIntegreTest {
    @Autowired
    private AuthService authService;
    @Autowired
    private EmailService emailService;

    Member member;

    @BeforeEach()
    public void initMember() {
        this.member = new Member();
        this.member.setEmail("pp6i07@hs.ac.kr");
        this.member.setName("표영운");
        this.member.setPassword("zx14661@#$");
        this.member.setPhoneNumber("01000000000");
    }

    @Test()
    public  void signUp() {
        authService.signUpUser(member);
    }
    @Test
    public void login() {
        RequestLoginUser loginUser = new RequestLoginUser(member.getEmail(), member.getPassword());
        try {
            authService.loginUser(loginUser.getEmail(), loginUser.getPassword());
            log.info("로그인 성공");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void modifyUserRole() {}

    @Test
    public void sendFirstEmail() {
        emailService.sendEmail("n6i07@naver.com", "테스트메일이빈다.", "ooo");
    }

}
