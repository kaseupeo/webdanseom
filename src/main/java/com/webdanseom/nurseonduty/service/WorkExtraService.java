package com.webdanseom.nurseonduty.service;


import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.WorkExtra;
import javassist.NotFoundException;

import java.util.Date;
import java.util.List;

public interface WorkExtraService {

    //임시근무 등록 및 수정
    void addWorkExtra(WorkExtra workExtra) throws NotFoundException;

    //임시근무목록조회
    List<WorkExtra> selectWorkExtraList(int nurseGroupSeq, Date date) throws NotFoundException;

    //임시근무삭제 - 그룹삭제시
    void deleteWorkExtra(int nurseGroupSeq) throws Exception;

    //임시근무 삭제 - 근무 저장시 삭제
    void deleteWorkExtra(int nurseGroupSeq, Date date) throws NotFoundException;
}
