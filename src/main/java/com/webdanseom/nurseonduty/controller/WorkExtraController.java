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

    //근무 등록 및 수정
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

    //임시근무목록 조회
    @GetMapping("/selectWorkExtra/{strDate}")
    public Response selectWorkExtra(@PathVariable String strDate,
                                    HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMM");
            Date date = simpleDateFormat.parse(strDate);
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            List<WorkExtra> workExtra = workExtraService.selectWorkExtraList(member.getGroupSeq().getSeq(), date);
            return new Response("success", "임시근무 조회 성공", workExtra);
        } catch (Exception e) {
            return new Response("error", "임시근무 조회 실패", e.getMessage());
        }
    }

}