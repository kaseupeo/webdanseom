package com.webdanseom.nurseonduty.controller;
/**
 * 파일명: PreceptorController.java
 * 설명:
 * 작성일자:2022.05.27
 * 작성자:신동현
 * 수정일자: 2022.05.
 * 수정자:
 */
import com.webdanseom.nurseonduty.jwt.JwtUtil;
import com.webdanseom.nurseonduty.model.Member;
import com.webdanseom.nurseonduty.model.Nurse;
import com.webdanseom.nurseonduty.model.Preceptor;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.RequestNursesName;
import com.webdanseom.nurseonduty.model.request.RequestPreceptorList;
import com.webdanseom.nurseonduty.model.response.ResponsePreceptor;
import com.webdanseom.nurseonduty.service.AuthService;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.NurseService;
import com.webdanseom.nurseonduty.service.PreceptorService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/preceptor")
public class PreceptorController {

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
    private PreceptorService preceptorService;

    // 관계 등록
    @PostMapping("/add")
    public Response addPreceptor(@RequestBody RequestNursesName requestNursesName,
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
            Preceptor preceptor = new Preceptor();
            Nurse chargeNurse = nurseService.findByName(requestNursesName.getChargeNurseName());
            Nurse newNurse = nurseService.findByName(requestNursesName.getNewNurseName());

            preceptor.setChargeNurseNum(chargeNurse.getNurseSeq());
            preceptor.setNewNurseNum(newNurse.getNurseSeq());
            preceptor.setNurseGroup(member.getGroupSeq());
            preceptorService.addPreceptor(preceptor);

            return new Response("success", "관계 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "관계 등록 실패", e.getMessage());
        }
    }

    // 관계 목록 조회
    @GetMapping("/select")
    public Response selectPreceptor(HttpServletRequest httpServletRequest,
                                    HttpServletResponse httpServletResponse) {
        Cookie token = null;
        String jwt = null;
        String email = null;
        try {
            token = cookieUtil.getCookie(httpServletRequest, JwtUtil.ACCESS_TOKEN_NAME);
            jwt = token.getValue();
            email = jwtUtil.getEmail(jwt);
            Member member = authService.findByEmail(email);

            List<Preceptor> preceptors = preceptorService.selectPreceptor(member.getGroupSeq().getSeq());
            List<ResponsePreceptor> preceptorList = new ArrayList<>();

            for (Preceptor preceptor : preceptors)
                preceptorList.add(new ResponsePreceptor(
                        preceptor.getPreceptorSeq(),
                        nurseService.findByNurseSeq(preceptor.getChargeNurseNum()).getName(),
                        nurseService.findByNurseSeq(preceptor.getNewNurseNum()).getName()));

            return new Response("success", "관계 목록 조회 성공", preceptorList);
        } catch (Exception e) {
            return new Response("error", "관계 목록 조회 실패", e.getMessage());
        }
    }

    // 관계 수정
    @PutMapping("/update")
    public Response updatePreceptor(@RequestBody RequestPreceptorList requestPreceptorList) {
        try {
            for (int i = 0; i < requestPreceptorList.getRequestPreceptorList().size(); i++) {
                Preceptor preceptor = new Preceptor();
                Nurse chargeNurse = nurseService.findByName(requestPreceptorList.getRequestPreceptorList().get(i).getChargeNurseName());
                Nurse newNurse = nurseService.findByName(requestPreceptorList.getRequestPreceptorList().get(i).getNewNurseName());

                preceptor.setPreceptorSeq(requestPreceptorList.getRequestPreceptorList().get(i).getSeq());
                preceptor.setChargeNurseNum(chargeNurse.getNurseSeq());
                preceptor.setNewNurseNum(newNurse.getNurseSeq());
                preceptor.setNurseGroup(chargeNurse.getNurseGroup());
                preceptorService.updatePreceptor(preceptor);
            }
            return new Response("success", "관계 수정 성공", requestPreceptorList);
        } catch (Exception e) {
            return new Response("error", "관계 수정 실패",e.getMessage());
        }
    }

    // 관계 삭제
    @DeleteMapping("/delete")
    public Response deletePreceptor(@RequestBody RequestPreceptorList requestPreceptorList) {
        try {
            for (int i = 0; i < requestPreceptorList.getRequestPreceptorList().size(); i++) {
                preceptorService.deletePreceptor(requestPreceptorList.getRequestPreceptorList().get(i).getSeq());
            }
            return new Response("success", "관계 삭제 성공", null);
        } catch (Exception e) {
            return new Response("error", "관계 삭제 실패", e.getMessage());
        }
    }
}
