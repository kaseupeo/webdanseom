package com.webdanseom.nurseonduty.controller;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.RequestInvite;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.GroupService;
import javassist.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 파일명: NurseGroupController.java
 * 설명: 그룹 관련 컴트롤러
 *      그룹가입, 그룹생성, 그룹초대, 그룹조회, 수간호사 확인 
 * 작성일자:2022.05.18
 * 작성자:표영운
 * 수정일자:
 * 수정자:
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

    //그룹생성
    @PostMapping("/createGroup")
    public Response createGroup(@RequestBody NurseGroup nurseGroup,
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

            groupService.createGroup(nurseGroup, member);
            return new Response("success", "그룹생성 성공", null);
        }catch (NotFoundException e) {
            return new Response("error", "그룹생성 실패", null);
        }
    }

    //그룹 초대
    @GetMapping("/invite")
    public Response inviteGroup(@RequestBody RequestInvite requestInvite) {
        try {
            String inviteLink;
            inviteLink = groupService.inviteGroup(requestInvite.getSeq(), requestInvite.getInviteLink());
            return new Response("success", "그룹초대 링크: " + inviteLink, null);
        }catch (Exception e) {
            return new Response("error", "그룹초대 실패", null);
        }

    }

    //그룹가입
    @PostMapping("/join")
    public Response joinGroup(@RequestBody RequestInvite requestInvite, Member member) {
        try {
            groupService.joinGroup(requestInvite.getSeq() ,requestInvite.getInviteLink(), member);
            return new Response("success", "그룹가입 성공", null);
        }catch (Exception e) {
            return new Response("error", "그룹가입 실패", e);
        }
    }

    //그룹조회
    @GetMapping("/selectGroup")
    public Response selectGroup(@RequestBody Member member) {
        try{
            groupService.selectGroup(member);
            return new Response("success", "그룹가입 조회", null);
        }catch (Exception e) {
            return  new Response("error", "그룹가입 실패", null);
        }
    }
    //수간호사 여부 확인
}
