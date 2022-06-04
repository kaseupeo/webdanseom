package com.webdanseom.nurseonduty.service;
/**
 * 파일명: GroupService.java
 * 설명: 그룹관련 Service
 * 작성일자:2022.05.17
 * 작성자:표영운
 * 수정일자: 2022.05.21
 * 수정자: 표영운
 */
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.request.RequestNurseGroup;
import javassist.NotFoundException;

import java.util.List;

public interface GroupService {
    //그룹생성
    NurseGroup createGroup(NurseGroup nurseGroup, Member member);

    //그룹초대
    String inviteGroup(int seq, String inviteLink);

    //그룹참여
    void joinGroup(String inviteLink, Member member) throws NotFoundException;

    //그룹조회
    NurseGroup selectGroup (NurseGroup nurseGroup) throws  NotFoundException;

    //그룹가입 여부 검사
    boolean isJoinGroup(Member member);

    //수간호사 확인
    boolean isHeadNurseCheck(NurseGroup nurseGroup, Member member);

    //그룹맴버조회
    List<Member> selectJoinMemberList(int nurseGroupNum) throws  NotFoundException;

    //그룹수정
    void updateGroup(NurseGroup nurseGroup, RequestNurseGroup requestNurseGroup);

    //수간호사 권한이전
    void moveHeadnurseAuth(NurseGroup nurseGroup, int memberSeq);

    //그룹탈퇴
    void dropGroup(Member member) throws NotFoundException;

    //그룹삭제
    void deleteGroup(NurseGroup nurseGroup) throws Exception;
}
