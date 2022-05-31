package com.webdanseom.nurseonduty.model.request;
/**
 * 파일명: RequestPreceptorList.java
 * 설명: 프리셉터 리스트 request
 * 작성일자:2022.05.31
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
public class RequestPreceptorList {
    private List<RequestPreceptor> requestPreceptorList;
}
