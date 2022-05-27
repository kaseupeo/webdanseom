package com.webdanseom.nurseonduty.service;

import com.webdanseom.nurseonduty.jwt.JwtUtil;
import org.springframework.stereotype.Service;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

@Service
public class CookieUtil {

    public Cookie createCookie(String cookieName, String value) {
        Cookie token = new Cookie(cookieName, value);
        token.setHttpOnly(true);
        token.setMaxAge((int) JwtUtil.TOKEN_VALIDATION_SECOND);
        token.setPath("/");
        return token;
    }

    public Cookie getCookie(HttpServletRequest httpServletRequest, String cookieName) {

        final Cookie[] cookies = httpServletRequest.getCookies();

        if (cookies==null) return null;

        for (Cookie cookie : cookies)
            if (cookie.getName().equals(cookieName))
                return cookie;

        return null;
    }

    public Cookie deleteCookie(HttpServletRequest httpServletRequest, String cookieName) {

        final Cookie[] cookies = httpServletRequest.getCookies();

        if (cookies!=null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals(cookieName)) {
                    cookie.setHttpOnly(true);
                    cookie.setMaxAge(0);
                    cookie.setPath("/");
                }
                return cookie;
            }
        }
        return null;
    }
}
