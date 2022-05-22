package com.webdanseom.nurseonduty.controller;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Nurse;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.repo.NurseGroupRepository;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.GroupService;
import com.webdanseom.nurseonduty.model.response.ResponseSelectGroup;
import com.webdanseom.nurseonduty.service.NurseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 파일명: NurseGroupController.java
 * 설명: 그룹 관련 컨트롤러
 *      그룹가입, 그룹생성, 그룹초대, 그룹조회, 수간호사 확인 
 * 작성일자:2022.05.18
 * 작성자:표영운
 * 수정일자: 2022.05.21
 * 수정자: 표영운
 */
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
            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            nurseGroup = groupService.createGroup(nurseGroup, member);
            groupService.joinGroup(nurseGroup.getInviteLink(), member);
            nurse.setNurseGroup(member.getGroupSeq());
            nurse.setName(member.getName());
            nurse.setPosition("수간호사");
            nurse.setAnnualLeave(10);

            nurseService.addNurse(nurse);

            return new Response("success", "그룹생성 성공", null);
        }catch (Exception e) {
            return new Response("error", "그룹생성 실패", e);
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
            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
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
            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
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
    public Response selectGroup(
                              HttpServletResponse httpServletResponse,
                              HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);
            boolean isHeadNurseCheck = false;
            boolean isJoinGroup = groupService.isJoinGroup(member);
            NurseGroup nurseGroup = member.getGroupSeq();

            if(isJoinGroup != true) {
                nurseGroup = groupService.selectGroup(member.getGroupSeq());
                isHeadNurseCheck = groupService.isHeadNurseCheck(nurseGroup, member);
            }
            ResponseSelectGroup responseSelectGroup = new ResponseSelectGroup(nurseGroup, isJoinGroup, isHeadNurseCheck);

            return new Response("success", "그룹조회 성공", responseSelectGroup);
        }catch (Exception e) {
            return  new Response("error", "그룹조회 실패", e.getMessage());
        }
    }
    //그룹가입 여부 확인
//    @GetMapping("/isJoinGroup")
//    public Response isJoinGroup(@RequestBody HttpServletResponse httpServletResponse,
//                                HttpServletRequest httpServletRequest) {
//        try{
//            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
//            jwt = token.getValue();
//            email = jwtUtil.getEmail(jwt);
//            Member member = authService.findByEmail(email);
//
//            boolean isJoinGroup = groupService.isJoinGroup(member);
//            return new Response("success", "그룹가입 여부 확인됨", isJoinGroup);
//        }catch (Exception e) {
//            return  new Response("error", "그룹가엽 여부 확인 실패", e);
//        }
//    }
//    //수간호사 여부 확인
//    @GetMapping("/isHeadNurse")
//    public  Response isHeadNurse(@RequestBody HttpServletRequest httpServletRequest) {
//        try {
//            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
//            jwt = token.getValue();
//            email = jwtUtil.getEmail(jwt);
//            Member member = authService.findByEmail(email);
//            NurseGroup nurseGroup = nurseGroupRepository.findBySeq(Integer.parseInt(member.getGroupSeq().toString()));
//
//            boolean isHeadNurseCheck = groupService.isHeadNurseCheck(nurseGroup,member);
//
//            return new Response("success", "수간호사 여부 확인됨", isHeadNurseCheck);
//        }catch (Exception e) {
//            return  new Response("error", "수간호사 여부 확인 실패", e);
//        }
//    }
}
