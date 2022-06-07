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
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.request.RequestWorkList;
import com.webdanseom.nurseonduty.service.CookieUtil;
import com.webdanseom.nurseonduty.service.WorkService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
    private WorkService workService;

    // 근무 등록
    @PostMapping("/add")
    public Response addWork(@RequestBody RequestWorkList requestWorkList,
                            HttpServletRequest httpServletRequest,
                            HttpServletResponse httpServletResponse) {
        try {
            for (int i = 0; i < requestWorkList.getWorkList().size(); i++) {
                workService.addWork(requestWorkList.getWorkList().get(i));
            }
            return new Response("success", "근무 등록 성공", null);
        } catch (Exception e) {
            return new Response("error", "근무 등록 실패", e.getMessage());
        }
    }

}
