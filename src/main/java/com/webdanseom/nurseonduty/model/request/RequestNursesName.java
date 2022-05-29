package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestNursesName.java
 * 설명: 프리셉터를 위한 간호사이름 request
 * 작성일자:2022.05.29
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
public class RequestNursesName {
    private String chargeNurseName;
    private String newNurseName;
}
