package com.webdanseom.nurseonduty.config;
/**
 * 파일명: CustomAuthenticationEntryPoint.java
 * 설명: 로그인 security관련된 클레스
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webdanseom.nurseonduty.model.Response;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Component
public class CustomAuthenticationEntryPoint implements AuthenticationEntryPoint {

    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException authException) throws IOException, ServletException {
        ObjectMapper objectMapper = new ObjectMapper();

        httpServletResponse.setStatus(200);
        httpServletResponse.setContentType("application/json;charset=utf-8");
        Response response = new Response("error", "로그인이 되지 않은 사용자입니다.", null);
        PrintWriter out = httpServletResponse.getWriter();
        String jsonResponse = objectMapper.writeValueAsString(response);
        out.print(jsonResponse);
    }
}
