package com.webdanseom.nurseonduty.service;
/**
 * 파일명: WorkService.java
 * 설명:
 * 작성일자:2022.06.07
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Work;

import java.util.Date;
import java.util.List;

public interface WorkService {

    // 근무 등록
    void addWork(Work work) throws Exception;

    // 근무표 조회 - 수간호사
    List<Work> selectGroupWork(int nurseGroupSeq, Date date) throws Exception;

    // 근무표 조회 - 일반간호사
    List<Work> selectNurseWork(int nurseSeq, Date date) throws Exception;
}
