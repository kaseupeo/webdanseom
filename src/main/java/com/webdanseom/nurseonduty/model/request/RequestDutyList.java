package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestDutyList.java
 * 설명:
 * 작성일자:2022.05.26
 * 작성자:표영운
 * 수정일자:
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Duty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class RequestDutyList {
    private List<Duty> dutyList;
}
