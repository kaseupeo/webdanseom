package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: GroupServiceImpl.java
 * 설명: 그룹관련 ServiceImpl
 * 작성일자:2022.05.17
 * 작성자:표영운
 * 수정일자: 2022.05.21
 * 수정자: 표영운
 */
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.EmailService;
import com.webdanseom.nurseonduty.service.GroupService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.UUID;

@Service
public class GroupServiceImpl implements GroupService{

    //이메일서비스 인터페이스 호출
    @Autowired
    private EmailService emailService;

    //회원메뉴 인터페이스 호출
    @Autowired
    private AuthService authService;

    //그룹 레포지토리 호출 
    @Autowired
    private NurseGroupRepository nurseGroupRepository;

    //회원 레포지토리 호출
    @Autowired
    private MemberRepository memberRepository;

    /**
     * 그룹 생성
     * @param nurseGroup
     * @param member
     * */
    //그룹 생성
    @Override
    @Transactional
    public NurseGroup createGroup(NurseGroup nurseGroup, Member member){
        UUID uuid = UUID.randomUUID();

        //그룹초기정보 insert
        nurseGroup.setHeadNurseNum(member.getMemberSeq());
        nurseGroup.setNumberOfDays(2);
        nurseGroup.setNumberOfEvenings(2);
        nurseGroup.setNumberOfNights(2);
        nurseGroup.setInviteLink(uuid.toString());

        String CREATE_GROUP = "http://localhost:8080/member/createGroup/";
        emailService.sendEmail(member.getEmail(), "[Nurse On Duty] 새그룹을 생성하셨습니다.  그룹명: " + nurseGroup.getGroupName(), CREATE_GROUP + uuid.toString());

        nurseGroupRepository.save(nurseGroup);

        return nurseGroup;
    }
    /**
     * 그룹 초대
     * @param seq
     * @param inviteLink
     * */
    //그룹 초대
    @Override
    public String inviteGroup(int seq, String inviteLink) {
        String INVITE_LINK = inviteLink;

        return INVITE_LINK;
    }
    /**
     * 그룹 가입
     * @param inviteLink
     * @param member
     * @throws NotFoundException
     * */
    //그룹 가입
    @Override
    public void joinGroup(String inviteLink, Member member) throws NotFoundException {
        if (member == null) throw new NotFoundException("joinGroup(), 로그인을 먼저 하십시오.");
        if(nurseGroupRepository.findByInviteLink(inviteLink) == null) throw new NotFoundException("joinGroup(), 해당초대장는 만료되었거나 존재하지 않는 초대장입니다." + inviteLink);

        member.setGroupSeq(nurseGroupRepository.findByInviteLink(inviteLink));

        memberRepository.save(member);
    }

     /**
      * 그룹조회
      * @param nurseGroup
      * @throws NotFoundException
      * */
     @Override
     public NurseGroup selectGroup(NurseGroup nurseGroup) throws  NotFoundException{
         if(nurseGroup == null) throw  new NotFoundException("selectGroup(), 가입이 되어 있지 않습니다.");
         return nurseGroupRepository.findBySeq(nurseGroup.getSeq());
     }

    /**
     * 그룹가입 여부
     * @param member
     * 그룹 조회와 동시에 그룹가입여부 확인
     * */
    @Override
    public boolean isJoinGroup(Member member){
        if(member.getGroupSeq() == null)
            return false;
        else
            return  true;
    }

    /**
     * 수간호사 확인
     * @param nurseGroup,
     * @param member
     * */
    @Override
    public boolean isHeadNurseCheck(NurseGroup nurseGroup, Member member) {
        if(nurseGroup.getHeadNurseNum() == member.getMemberSeq())
            return true;
        else
            return false;
    }

}
