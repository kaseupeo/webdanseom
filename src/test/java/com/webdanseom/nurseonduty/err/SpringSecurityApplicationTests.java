package com.webdanseom.nurseonduty.err;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.transaction.Transactional;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;

@SpringBootTest
public class SpringSecurityApplicationTests {
    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private JwtUtil jwtUtil;

    @Test
    void contextLoads() {
    }

    @Test
    @Transactional()
    void testDB() {
        Member member = new Member();
        member.setEmail("pp6i07@hs.ac.kr");
        member.setPassword("123123");
        member.setPhoneNumber("01000000000");
        memberRepository.save(member);
        Member user1 = memberRepository.findByEmail("n6i07@naver.com");
        assertThat(user1.getName(), is("표영운"));
        memberRepository.delete(user1);
    }

    @Test
    void test() {
        String username = jwtUtil.getEmail("pp6i07@hs.ac.kr");
        System.out.println(username);
    }
}
