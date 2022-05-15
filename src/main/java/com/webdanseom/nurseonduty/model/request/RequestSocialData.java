package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestSocialData.java
 * 설명: 소셜 회원가입을 위해 소셜 데이터 정보 request
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
public class RequestSocialData {
    private String email;
    private String name;
    private String phoneNumber;
    private String type;
}
