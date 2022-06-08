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
    void addNurse(Nurse nurse) throws Exception;

    // 간호사 조회
    Nurse findByNurseSeq(int seq) throws NotFoundException;

    // 간호사 이름으로 조회
    Nurse findByName(String name) throws NotFoundException;

    //간호사 목록 조회
    List<Nurse> selectNurse(int nurseGroupSeq) throws NotFoundException;

    //간호사 이름과 그룹으로 조회
    Nurse findByNameAndGroup(String name, int nurseGroupSeq) throws NotFoundException;

    //간호사 정보 수정
    void editNurse(Nurse nurse) throws NotFoundException;

    // 간호사 삭제
    void deleteNurse(Nurse nurse) throws Exception;
}
