package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.config.UserRole;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.requset.RequestSocialData;
import javassist.NotFoundException;

public interface AuthService {
    final String REDIS_CHANGE_PASSWORD_PREFIX="CPW";

    //일반 회원가입
    void signUpUser(Member member);

    //소셜 회원가입
    void signUpSocialUser(RequestSocialData member);

    //소셜 로그인
    Member loginSocialUser(String id, String type) throws NotFoundException;

    //일반 로그인
    Member loginUser(String email, String password) throws Exception;

    //이메일 인증
    Member findByEmail(String email) throws NotFoundException;

    //인증본호 이메일 받기
    void verifyEmail(String key) throws NotFoundException;

    //인증번호 이메일 보내기
    void sendVerificationMail(Member member) throws NotFoundException;

    //로그인을 위한 유저정보 수정
    void modifyUserRole(Member member, UserRole userRole);

    //이메일에서 보낸 인증번호 토큰
    boolean isPasswordUuidValidate(String key);

    //비밀번호 변경
    void changePassword(Member member, String password) throws NotFoundException;

    //비밀번호 변경요청
    void requestChangePassword(Member member) throws NotFoundException;
}
