package com.webdanseom.nurseonduty.service;
/**
 * 파일명: PreceptorService.java
 * 설명:
 * 작성일자:2022.05.27
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Preceptor;
import javassist.NotFoundException;

import java.util.List;

public interface PreceptorService {

    // 관계 등록
    void addPreceptor(Preceptor preceptor) throws Exception;

    // 관계 조회
    List<Preceptor> selectPreceptor(int nurseGroupSeq) throws NotFoundException;

    // 관계 수정
    void updatePreceptor(Preceptor preceptor) throws NotFoundException;

    // 관계 삭제
    void deletePreceptor(int preceptorSeq) throws Exception;
}
