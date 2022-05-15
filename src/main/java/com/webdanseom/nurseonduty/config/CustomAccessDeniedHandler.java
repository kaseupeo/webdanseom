package com.webdanseom.nurseonduty.config;
/**
 * 파일명: CustomAccessDeniedHandler.java
 * 설명: securityConfig 관련 클레스
 * 작성일자:2022.04.30
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webdanseom.nurseonduty.model.Response;
import com.webdanseom.nurseonduty.model.SecurityMember;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    @Override
    public void handle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        ObjectMapper objectMapper = new ObjectMapper();

        httpServletResponse.setStatus(200);
        httpServletResponse.setContentType("application/json;charset=utf-8");
        Response response = new Response("error", "접근가능한 권한을 가지고 있지 않습니다.", null);

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        SecurityMember securityMember = (SecurityMember) authentication.getPrincipal();
        Collection<GrantedAuthority> authorities = securityMember.getAuthorities();

        if (hasRole(authorities, UserRole.ROLE_NOT_PERMITTED.name())) {
            response.setMessage("사용자 인증메일을 받지 않았습니다.");
        }

        PrintWriter out = httpServletResponse.getWriter();
        String jsonResponse = objectMapper.writeValueAsString(response);
        out.print(jsonResponse);
    }

    private boolean hasRole(Collection<GrantedAuthority> authorities, String role) {
        return authorities.contains(new SimpleGrantedAuthority(role));
    }
}
