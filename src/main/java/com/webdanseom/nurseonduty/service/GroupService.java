package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.NurseGroup;
import javassist.NotFoundException;

/**
 * 파일명: AuthService.java
 * 설명: 그룹관련 Service
 * 작성일자:2022.05.17
 * 작성자:표영운
 * 수정일자:
 * 수정자:
 */
public interface GroupService {
    //그룹생성
    void createGroup(NurseGroup nurseGroup, Member member);

    //그룹초대
    String inviteGroup(int seq, String inviteLink);

    //그룹참여
    void joinGroup(int seq, String inviteLink, Member member) throws NotFoundException;

}
