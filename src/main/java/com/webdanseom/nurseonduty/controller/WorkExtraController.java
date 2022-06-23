package com.webdanseom.nurseonduty.controller;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.*;
import com.webdanseom.nurseonduty.model.request.RequestWorkList;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.NurseService;
import com.webdanseom.nurseonduty.service.WorkExtraService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/workExtra")
public class WorkExtraController {

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private WorkExtraService workExtraService;

    @Autowired
    private AuthService authService;

    @Autowired
    private NurseService nurseService;

    //임시근무 등록 및 수정
    @PostMapping("/addWorkExtra")
    public Response addWorkExtra(@RequestBody RequestWorkList requestWorkList,
                                 HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);


            NurseGroup nurseGroup = member.getGroupSeq();

            for (int i = 0; i < requestWorkList.getRequestWorkList().size(); i++) {
                WorkExtra workExtra = new WorkExtra();
                Nurse nurse = nurseService.findByNurseSeq(requestWorkList.getRequestWorkList().get(i).getNurseSeq());
                workExtra.setNurse(nurse);
                workExtra.setNurseGroup(member.getGroupSeq());
                workExtra.setDuty(requestWorkList.getRequestWorkList().get(i).getDuty());
                workExtra.setDate(requestWorkList.getRequestWorkList().get(i).getDate());
                workExtraService.addWorkExtra(workExtra);
            }
            return new Response("success", "임시근무 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "임시근무 등록 실패", e.getMessage());
        }
    }

    //근무표 자동생성
    @PostMapping("/automaticAddWorkExtra")
    public Response automaticAddWorkExtra(@RequestBody RequestWorkList requestWorkList,
                                          HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            return new Response("success", "임시근무 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "임시근무 등록 실패", e.getMessage());
        }
    }
    

}