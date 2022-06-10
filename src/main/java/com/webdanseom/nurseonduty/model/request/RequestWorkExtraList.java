package com.webdanseom.nurseonduty.model.request;

import com.webdanseom.nurseonduty.model.WorkExtra;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

/**
 * 파일명: RequestWorkExtraList.java
 * 설명:
 * 작성일자:2022.06.07
 * 작성자:표영운
 * 수정일자:
 * 수정자:
 */

@Getter
@Setter
@NoArgsConstructor
public class RequestWorkExtraList {
    private List<WorkExtra> workExtraList;
}
