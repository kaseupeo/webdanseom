package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestWorkList.java
 * 설명:
 * 작성일자:2022.06.07
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class RequestWorkList {
    private List<RequestWork> requestWorkList;
}
