package com.webdanseom.nurseonduty.controller;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Duty;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.NurseGroup;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.RequestDutyList;
import com.webdanseom.nurseonduty.repo.DutyRepository;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.DutyService;
import com.webdanseom.nurseonduty.service.GroupService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.sql.Date;
import java.sql.Time;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/duty")
public class DutyController {
    @Autowired
    private GroupService groupService;

    @Autowired
    private DutyService dutyService;

    @Autowired
    private CookieUtil cookieUtil;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AuthService authService;

    @Autowired
    private DutyRepository dutyRepository;

    //듀티추가
    @PostMapping("/addDuty")
    public Response addDuty(Duty duty ,HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);

            Member member = authService.findByEmail(email);
            NurseGroup nurseGroup = member.getGroupSeq();

            duty.setDutyCode("N");
            duty.setNurseGroup(nurseGroup);
            duty.setDutyCodeName("설명");
            duty.setWorkingHours(8);
            duty.setWorkType("Day like");
            duty.setHexColor("#FFFFFF");
            duty.setStartTime(Time.valueOf("00:00:00"));
            duty.setIsUsable(true);
            duty.setCreator("사용자");
            dutyService.addDuty(duty);

            return new Response("success", "듀티코드 추가 성공", null);
        }catch (Exception e) {
            return new Response("error", "듀티코드 추가 실패", e.getMessage());
        }
    }

    //듀티조회
    @GetMapping("/selectDuty")
    public Response selectDuty(HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try{
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);

            Member member = authService.findByEmail(email);
            NurseGroup nurseGroup = member.getGroupSeq();

            List<Duty> duty = dutyService.selectDuty(nurseGroup.getSeq());

            return new Response("success", "듀티 전체 조회 성공", duty);
        }catch (Exception e) {
            return new Response("error", "듀티 전체 조회 실패", e.getMessage());
        }
    }

    //듀티수정
    @PutMapping("/updateDuty")
    public Response updateDuty(@RequestBody RequestDutyList requestDutyList) {
        try {
            for(int i = 0; i < requestDutyList.getDutyList().size(); i++) {
                if(dutyService.findByDutySeq(requestDutyList.getDutyList().get(i).getDutySeq())!=null) {
                    dutyService.updateDuty(requestDutyList.getDutyList().get(i));
                }
            }
            return new Response("success", "듀티코드 수정 성공", requestDutyList);
        }catch (Exception e) {
            return new Response("error", "듀티코드 수정 실패", e.getMessage());
        }
    }

    //듀티삭제
    @DeleteMapping("/deleteDuty")
    public Response deleteDuty(@RequestBody RequestDutyList requestDutyList) {
        try {
            for(int i = 0; i < requestDutyList.getDutyList().size(); i++) {
                if(dutyService.findByDutySeq(requestDutyList.getDutyList().get(i).getDutySeq())!=null) {
                    dutyService.deleteDuty(requestDutyList.getDutyList().get(i));
                }
            }
            return new Response("success", "듀티코드 삭제 성공", null);
        }catch (Exception e) {
            return new Response("error", "듀티코드 실패 실패", e.getMessage());
        }
    }
    
    //초기화
    @GetMapping("/returnDuty")
    public Response returnDuty(HttpServletRequest httpServletRequest) {
        Cookie token = null;
        String jwt = null;
        String email = null;

        try {
            token = cookieUtil.getCookie(httpServletRequest, jwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);

            Member member = authService.findByEmail(email);
            NurseGroup nurseGroup = member.getGroupSeq();

            List<Duty> dutyList = dutyService.selectDuty(nurseGroup.getSeq());
            dutyService.returnDuty(dutyList, nurseGroup.getSeq());

            return new Response("success", "듀티 초기화 성공", null);
        }catch (Exception e) {
            return new Response("error", "듀티 초기화 실패", null);
        }
    }
}
