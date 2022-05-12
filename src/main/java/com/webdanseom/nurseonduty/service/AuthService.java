package com.webdanseom.nurseonduty.service;
/**
 * 파일명: AuthService.java
 * 설명: 회원이 이용할 수 있는 모든 서비스기능의 인터페이스
 *      회원가입(일반, 소셜), 로그인(일반,소셜), 이메일인증 , 이메일확인, 이메일인증번호 발송,인증번호확인, 비밀번호 변경
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자: 2022.05.12
 * 수정자:표영운
 */
import com.webdanseom.nurseonduty.config.UserRole;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.request.RequestSocialData;
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

    //이메일인증 확인
    void verifyEmail(String key) throws NotFoundException;

    //이메일인증 보내기
    void sendVerificationMail(Member member) throws NotFoundException;

    //로그인을 위한 유저정보 수정
    void modifyUserRole(Member member, UserRole userRole);

    //이메일에서 보낸 인증번호 토큰
    boolean isPasswordUuidValidate(String key);

    //비밀번호 변경
    void changePassword(Member member, String password) throws NotFoundException;

    //비밀번호 찾기
    void findPassword(Member member) throws NotFoundException;

    //회원정보 수정
    void editProfile(Member member, String phoneNumber) throws NotFoundException;

    //회원탈퇴
    void withdrawal(Member member, String password) throws Exception;

    //그룹생성
    void createGroup(NurseGroup nurseGroup);

    //그룹참여


}
