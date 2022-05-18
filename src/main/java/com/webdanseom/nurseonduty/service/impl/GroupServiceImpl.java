package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: GroupServiceImpl.java
 * 설명: 그룹관련 ServiceImpl
 * 작성일자:2022.05.17
 * 작성자:표영운
 * 수정일자:2022.05.18
 * 수정자:
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
    public void createGroup(NurseGroup nurseGroup, Member member) throws NotFoundException  {
        UUID uuid = UUID.randomUUID();

        //그룹초기정보 insert
        nurseGroup.setHeadNurseNum(member.getMemberSeq());
        nurseGroup.setNumberOfDays(2);
        nurseGroup.setNumberOfEvenings(2);
        nurseGroup.setNumberOfNights(2);
        nurseGroup.setInviteLink(uuid.toString());

        //회원 간호사에 그룹번호 업데이트
//        joinGroup(nurseGroup.getSeq(), nurseGroup.getInviteLink(), member);

        String CREATE_GROUP = "http://localhost:8080/member/createGroup/";
        emailService.sendEmail(member.getEmail(), "[Nurse On Duty] 새그룹을 생성하셨습니다.  그룹명: " + nurseGroup.getGroupName(), CREATE_GROUP + uuid.toString());

        nurseGroupRepository.save(nurseGroup);
    }
    /**
     * 그룹 초대  -- 나중에 뺀다
     * @param seq
     * @param inviteLink
     * */
    //그룹 초대
    @Override
    public String inviteGroup(int seq, String inviteLink) {
        UUID uuid = UUID.randomUUID();
        String INVITE_LINK = "http://localhost:8080/member/inviteGroup/" + inviteLink;

        return INVITE_LINK;
    }
    /**
     * 그룹 가입
     * @param seq
     * @param inviteLink
     * @param member
     * @throws NotFoundException
     * */
    //그룹 가입
    @Override
    public void joinGroup(int seq, String inviteLink, Member member) throws NotFoundException {
        if (member == null) throw new NotFoundException("joinGroup(), 로그인을 먼저 하십시오.");
        if(nurseGroupRepository.findByInviteLink(inviteLink) == null) throw new NotFoundException("joinGroup(), 해당초대장는 만료되었거나 존재하지 않는 초대장입니다.");
        if(nurseGroupRepository.findBySeq(seq) == null) throw new NotFoundException("joinGroup(), 해당 그룹은 없는 그룹(임시)");
        
        member.setGroupSeq(nurseGroupRepository.findBySeq(seq));

        memberRepository.save(member);
    }

    /**
     * 그룹 조회
     * @param member
     * @throws NotFoundException
     * 그룹 조회와 동시에 그룹가입여부 확인
     * */
    @Override
    public void selectGroup(Member member) throws NotFoundException {

        if(memberRepository.findByGroupSeq(Integer.parseInt(member.getGroupSeq().toString())) == null )
            throw  new NotFoundException("selectGroup(), 그룹에 가입되어 있지 않습니다.");


    }

    /**
     * 수간호사 확인
     * @param
     * */
    @Override
    public boolean isHeadNurseCheck(NurseGroup nurseGroup) {
        return false;
    }

}
