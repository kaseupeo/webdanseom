package com.webdanseom.nurseonduty.model.request;

/**
 * 파일명: RequestNurseGroup.java
 * 설명: 그룹 최소 듀티일 요청
 * 작성일자:2022.06.03
 * 작성자:표영운
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestNurseGroup {
    private int numberOfDays;
    private int numberOfEvenings;
    private int numberOfNights;
}
