package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestJoinGroup.java
 * 설명: 메일을 보내기 위해 해당 회원의 이메일 주소 request
 * 작성일자:2022.05.04
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
public class RequestVerifyEmail {
    String email;
}
