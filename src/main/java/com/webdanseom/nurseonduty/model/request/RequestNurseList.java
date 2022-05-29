package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestNurseList.java
 * 설명:
 * 작성일자:2022.05.29
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Nurse;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class RequestNurseList {
    private List<Nurse> nurseList;
}
