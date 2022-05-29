package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.model.Duty;
import com.webdanseom.nurseonduty.model.NurseGroup;
import javassist.NotFoundException;

import java.util.List;

public interface DutyService  {

    //초기 듀티코드 생성
    void initializeDuty(NurseGroup nurseGroup, int index) throws NotFoundException;

    //듀티조회
    List<Duty> selectDuty(int nurseGroupSeq) throws NotFoundException;

    //듀티추가
    void addDuty(Duty duty) throws NotFoundException;

    //듀티수정
    void updateDuty(int seq, int updateSeq) throws  NotFoundException;

    //듀티삭제
    void deleteDuty(Duty duty) throws Exception;

    //초기화
    void returnDuty(Duty duty) throws Exception;

}
