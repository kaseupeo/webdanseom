package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.SecurityMember;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private MemberRepository memberRepository;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Member member = memberRepository.findByEmail(email);
        if (member == null) throw new UsernameNotFoundException(email + " : 이메일 존재하지 않습니다.");
        return new SecurityMember(member);
    }
}
