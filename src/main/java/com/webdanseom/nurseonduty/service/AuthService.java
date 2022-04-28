package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.model.Member;

public interface AuthService {
    void signUpMember(Member member);
    Member loginMember(String email, String password) throws Exception;
}
