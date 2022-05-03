package com.webdanseom.nurseonduty.service.impl;

import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Salt;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.SaltUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private SaltUtil saltUtil;

    /**
     * 회원가입
     * @param member
     */
    @Override
    public void signUpUser(Member member) {
        String password = member.getPassword();
        String salt = SaltUtil.genSalt();

        member.setSalt(new Salt(salt));
        member.setPassword(saltUtil.encodePassword(salt, password));
        memberRepository.save(member);
    }

    /**
     * 로그인
     * @param email
     * @param password
     * @return
     * @throws Exception
     */
    @Override
    public Member loginUser(String email, String password) throws Exception {
        Member member = memberRepository.findByEmail(email);

        if (member==null) throw new Exception("조회되지 않습니다.");

        String salt = member.getSalt().getSalt();
        password = saltUtil.encodePassword(salt, password);

        if (!member.getPassword().equals(password)) throw new Exception("비밀번호가 틀립니다.");

        return member;
    }
}
