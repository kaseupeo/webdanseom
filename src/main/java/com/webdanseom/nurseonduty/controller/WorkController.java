package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: WorkController.java
 * 설명:
 * 작성일자:2022.06.04
 * 작성자:신동현
 * 수정일자: 2022.06.
 * 수정자:
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Nurse;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.Work;
import com.webdanseom.nurseonduty.model.request.RequestWorkList;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.NurseService;
import com.webdanseom.nurseonduty.service.WorkService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/work")
public class WorkController {

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
    private WorkService workService;

    // 근무 등록
    @PostMapping("/add")
    public Response addWork(@RequestBody RequestWorkList requestWorkList,
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

            for (int i = 0; i < requestWorkList.getRequestWorkList().size(); i++) {
                Work work = new Work();
                Nurse nurse = nurseService.findByNameAndGroup(requestWorkList.getRequestWorkList().get(i).getName(), member.getGroupSeq().getSeq());
                work.setNurse(nurse);
                work.setNurseGroup(member.getGroupSeq());
                work.setDuty(requestWorkList.getRequestWorkList().get(i).getDuty());
                work.setDate(requestWorkList.getRequestWorkList().get(i).getDate());
                workService.addWork(work);
            }
            return new Response("success", "근무 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "근무 등록 실패", e.getMessage());
        }
    }

    // 근무 조회 - 수간호사용
    @GetMapping("/selectGroup/{strDate}")
    public Response selectGroupWork(@PathVariable String strDate,
                                    HttpServletRequest httpServletRequest,
                                    HttpServletResponse httpServletResponse) {
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

            List<Work> workList = workService.selectGroupWork(member.getGroupSeq().getSeq(), date);
            return new Response("success", "근무 조회 성공", workList);
        } catch (Exception e) {
            return new Response("error", "근무 조회 실패", e.getMessage());
        }
    }

    // 근무 조회 - 일반간호사용
    @GetMapping("/selectNurse/{strDate}")
    public Response selectNurseWork(@PathVariable String strDate,
                                    HttpServletRequest httpServletRequest,
                                    HttpServletResponse httpServletResponse) {
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

            List<Work> workList = workService.selectNurseWork(member.getNurseSeq(), date);
            return new Response("success", "근무 조회 성공", workList);
        } catch (Exception e) {
            return new Response("error", "근무 조회 실패", e.getMessage());
        }
    }
}
