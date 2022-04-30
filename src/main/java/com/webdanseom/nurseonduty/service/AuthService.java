package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.model.Member;

public interface AuthService {
    void signUpUser(Member member);
    Member loginUser(String email, String password) throws Exception;
}
