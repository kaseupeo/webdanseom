package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: NurseGroupController.java
 * 설명: 그룹 관련 컨트롤러
 *      그룹가입, 그룹생성, 그룹초대, 그룹조회, 수간호사 확인
 * 작성일자:2022.05.18
 * 작성자:표영운
 * 수정일자: 2022.05.21
 * 수정자: 표영운
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.*;
import com.webdanseom.nurseonduty.model.request.RequestEmail;
import com.webdanseom.nurseonduty.model.request.RequestNurseGroup;
import com.webdanseom.nurseonduty.repo.MemberRepository;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.service.*;
import com.webdanseom.nurseonduty.model.response.ResponseSelectGroup;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/nurseGroup")
public class NurseGroupController {
    @Autowired
    private GroupService groupService;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthService authService;

    @Autowired
    private NurseGroupRepository nurseGroupRepository;

    @Autowired
    private NurseService nurseService;

    @Autowired
    private DutyService dutyService;

    @Autowired
    private MemberRepository memberRepository;


    //그룹생성
    @PostMapping("/createGroup")
    public Response createGroup(@RequestBody NurseGroup nurseGroup,
                                Nurse nurse,
                                HttpServletRequest httpServletRequest,
                                HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try{
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            nurseGroup = groupService.createGroup(nurseGroup, member);
            //그룹가입
            groupService.joinGroup(nurseGroup.getInviteLink(), member);

            //수간호사 등록
            nurse.setNurseGroup(member.getGroupSeq());
            nurse.setName(member.getName());
            nurse.setPosition("수간호사");
            nurse.setAnnualLeave(10);
            nurseService.addNurse(nurse);
            
            //간호사 연동
            member.setNurseSeq(nurse.getNurseSeq());
            authService.updateNurseSeq(member);

            //듀티코드 생성 추가
            for(int i = 0 ; i < 30; i++)
                dutyService.initializeDuty(nurseGroup, i);

            return new Response("success", "그룹생성 성공", null);
        }catch (Exception e) {
            return new Response("error", "그룹생성 실패", e.getMessage());
        }
    }

    //그룹 초대
    @GetMapping("/invite")
    public Response inviteGroup(@RequestBody NurseGroup nurseGroup,
                                HttpServletRequest httpServletRequest,
                                HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            nurseGroup = nurseGroupRepository.findBySeq(member.getGroupSeq().getSeq());

            String inviteLink;
            inviteLink = groupService.inviteGroup(nurseGroup.getSeq(), nurseGroup.getInviteLink());
            return new Response("success", "그룹초대 링크: " + inviteLink, inviteLink);
        }catch (Exception e) {
            return new Response("error", "그룹초대 실패", null);
        }

    }

    //그룹가입
    @PostMapping("/join")
    public Response joinGroup(@RequestBody NurseGroup nurseGroup,
                              HttpServletResponse httpServletResponse,
                              HttpServletRequest httpServletRequest) {

        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);


            groupService.joinGroup(nurseGroup.getInviteLink(), member);
            return new Response("success", "그룹가입 성공", null);
        }catch (Exception e) {
            return new Response("error", "그룹가입 실패", e);
        }

    }

    //그룹조회 
    @GetMapping("/selectGroup")
    public Response selectGroup(HttpServletResponse httpServletResponse,
                              HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            boolean isHeadNurseCheck = false;
            boolean isJoinGroup = groupService.isJoinGroup(member);
            NurseGroup nurseGroup;

            if(isJoinGroup == true) {
                nurseGroup = groupService.selectGroup(member.getGroupSeq());
                isHeadNurseCheck = groupService.isHeadNurseCheck(nurseGroup, member);
            }
            else
                nurseGroup =  groupService.selectGroup(null);
            ResponseSelectGroup responseSelectGroup = new ResponseSelectGroup(nurseGroup, isJoinGroup, isHeadNurseCheck);

            return new Response("success", "그룹조회 성공", responseSelectGroup);
        }catch (Exception e) {
            return  new Response("error", "그룹조회 실패", e.getMessage());
        }
    }
    
    
    //그룹멤버조회
    @GetMapping("/selectJoinMemberList")
    public  Response selectJoinMemberList(HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            List<Member> memberList = groupService.selectJoinMemberList(member.getGroupSeq().getSeq());

        return new Response("success", "그룹멤버조회 성공", member);
    }catch (Exception e) {
        return  new Response("error", "그룹멤버조회 실패", e.getMessage());
        }
    }

    //그룹수정
    @PostMapping("/updateGroup")
    public Response updateGroup(@RequestBody RequestNurseGroup requestNurseGroup,
                                HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            NurseGroup nurseGroup = nurseGroupRepository.findBySeq(member.getGroupSeq().getSeq());

            groupService.updateGroup(nurseGroup, requestNurseGroup);
        return new Response("success", "그룹수정 성공", null);
    }catch (Exception e) {
        return  new Response("error", "그룹수정 실패", e.getMessage());
        }
    }

    //수간호사 권한이전
    @PostMapping("/moveHeadnurseAuth")
    public Response moveHeadnurseAuth(@RequestBody RequestEmail requestEmail,
                                      HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            NurseGroup nurseGroup = nurseGroupRepository.findBySeq(member.getGroupSeq().getSeq());

            Member moveMember = authService.findByEmail(requestEmail.getEmail());

            groupService.moveHeadnurseAuth(nurseGroup, moveMember.getMemberSeq());

            return new Response("success", "수간호사 권한이전 성공", null);
        }catch (Exception e) {
            return  new Response("error", "수간호사 권한이전 실패", e.getMessage());
        }
    }

    //그룹탈퇴
    @PostMapping("/dropGroup")
    public Response dropGroup(HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            groupService.dropGroup(member);

            return new Response("success", "그룹탈퇴 성공", null);
        }catch (Exception e) {
            return  new Response("error", "그룹탈퇴 실패", e.getMessage());
        }
    }

    //그룹삭제
    @DeleteMapping("/deleteGroup")
    public Response deleteGroup(HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            NurseGroup nurseGroup = nurseGroupRepository.findBySeq(member.getGroupSeq().getSeq());
            groupService.moveHeadnurseAuth(nurseGroup, 0);

            List<Nurse> nurseList = nurseService.selectNurse(member.getGroupSeq().getSeq());
            for(int i = 0; i < nurseList.size(); i++) {
                if(nurseService.findByNurseSeq(nurseList.get(i).getNurseSeq())!=null)
                   nurseService.deleteNurse(nurseList.get(i));
            }

            List<Duty> dutyList = dutyService.selectDuty(nurseGroup.getSeq());
            for(int i = 0; i < dutyList.size();i++) {
                if(dutyService.findByDutySeq(dutyList.get(i).getDutySeq())!=null)
                    dutyService.deleteDuty(dutyList.get(i));
            }

            List<Member> memberList = memberRepository.findByGroupSeqSeq(member.getGroupSeq().getSeq());
            for(int  i = 0; i < memberList.size(); i++) {
                if(authService.findByEmail(memberList.get(i).getEmail())!=null)
                    groupService.dropGroup(memberList.get(i));
            }
            groupService.deleteGroup(nurseGroup);

            return new Response("success", "그룹삭제 성공", null);
        }catch (Exception e) {
            return  new Response("error", "그룹삭제 실패", e.getMessage());
        }
    }

}
