package com.webdanseom.nurseonduty.service;
/**
 * 파일명: NurseService.java
 * 설명:
 * 작성일자:2022.05.17
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.model.Nurse;
import javassist.NotFoundException;

import java.util.List;

public interface NurseService {

    //간호사 등록
    void addNurse(Nurse nurse);

    //간호사 조회
    List<Nurse> selectNurse(int nurseGroupSeq) throws NotFoundException;
}
