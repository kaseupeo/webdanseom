package com.webdanseom.nurseonduty.model;

import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

public class SecurityMember extends User {

    public SecurityMember(Member member) {
        super(member.getEmail(), "{noop}" + member.getPassword(), AuthorityUtils.createAuthorityList(member.getRole().toString()));
    }
}
