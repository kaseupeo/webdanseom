package com.webdanseom.nurseonduty.model;
/**
 * 파일명: SecurityMember.java
 * 설명: Spring 암호화화 jwt의 연결
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;



public class SecurityMember extends User {

    public SecurityMember(Member member) {
        super(member.getEmail(), "{noop}" + member.getPassword(), AuthorityUtils.createAuthorityList(member.getRole().toString()));
    }
}
