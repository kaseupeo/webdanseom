package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: NurseController.java
 * 설명:
 * 작성일자:2022.05.17
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Nurse;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.RequestNurseGroupSeq;
import com.webdanseom.nurseonduty.model.request.RequestNurseSeq;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.GroupService;
import com.webdanseom.nurseonduty.service.NurseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/nurse")
public class NurseController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private AuthService authService;

    @Autowired
    private NurseService nurseService;

    @Autowired
    private GroupService groupService;

    //간호사 등록
    @PostMapping("/add")
    public Response addNurse(@RequestBody Nurse nurse,
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
            nurse.setNurseGroup(member.getGroupSeq());
            nurseService.addNurse(nurse);
            return new Response("success", "간호사 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "간호사 등록 실패", e.getMessage());
        }
    }

    //간호사 목록 조회
    @GetMapping("/select")
    public Response selectNurse(HttpServletRequest httpServletRequest,
                                HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            List<Nurse> nurse = nurseService.selectNurse(member.getGroupSeq().getSeq());
            return new Response("success", "간호사 목록 조회 성공", nurse);
        } catch (Exception e) {
            return new Response("error", "간호사 목록 조회 실패", e.getMessage());
        }
    }

    //간호사 정보 수정
    @PutMapping("/edit")
    public Response editNurse(@RequestBody Nurse nurse) {
        try {
            nurseService.editNurse(nurse);
            return new Response("success", "간호사 정보 수정 성공", nurse);
        } catch (Exception e) {
            return new Response("error", "간호사 정보 수정 실패", e.getMessage());
        }
    }

    // 간호사 정보 삭제
    @DeleteMapping("/delete")
    public Response deleteNurse(@RequestBody RequestNurseSeq requestNurseSeq) {
        try {
            Nurse nurse = nurseService.findByNurseSeq(requestNurseSeq.getSeq());
            nurseService.deleteNurse(nurse);
            return new Response("success", "간호사 삭제 성공", null);
        } catch (Exception e) {
            return new Response("error", "간호사 삭제 실패", e.getMessage());
        }
    }
}