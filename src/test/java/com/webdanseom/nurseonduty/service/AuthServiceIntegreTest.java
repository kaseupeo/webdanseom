package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.requset.RequestLoginUser;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@Slf4j
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
        this.member.setEmail("test.com");
        this.member.setName("표영운");
        this.member.setPassword("testtest");
        this.member.setPhoneNumber("01000000000");
    }

    @Test
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
    public void sendFirsEmail() {
        emailService.sendEmail(("n6i07@naver.com", "테스트메일이빈다.", "ooo");
    }

}
