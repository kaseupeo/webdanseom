package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestJoinGroup.java
 * 설명: 회원탈퇴를 위해 해당 회원의 이메일/비밀번호 request
 * 작성일자:2022.05.12
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestWithdrawal {
    private String email;
    private String password;
}
