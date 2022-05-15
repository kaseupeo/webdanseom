package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestFindPassword.java
 * 설명: 비밀번호 찾기를 위해 해당 회원의 이메일 request
 * 작성일자:2022.05.12
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestFindPassword {
    private String email;
}
