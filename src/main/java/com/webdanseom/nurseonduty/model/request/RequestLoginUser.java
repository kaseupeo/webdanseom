package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestLoginUser.java
 * 설명: 로그인을 위해 회원의 이메일과, 비밀번호 request
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestLoginUser {
    private String email;
    private String password;

    public RequestLoginUser(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
