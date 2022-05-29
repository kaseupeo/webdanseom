package com.webdanseom.nurseonduty.jwt;
/**
 * 파일명: Duty.java
 * 설명: JwtRequestFilter.java에서 토큰화한 정보를 JwtUtil에서 받아와서 암호화
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */

import com.webdanseom.nurseonduty.service.impl.CustomUserDetails;
import com.webdanseom.nurseonduty.model.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
    public final static long TOKEN_VALIDATION_SECOND = 1000L * 30 * 10;
    public final static long REFRESH_TOKEN_VALIDATION_SECOND = 1000L * 60 * 60 * 24 * 2;

    final static public String ACCESS_TOKEN_NAME = "accessToken";
    final static public String REFRESH_TOKEN_NAME = "refreshToken";

    @Value("${spring.jwt.secret}")
    private String SECRET_KEY;

    private Key getSigningKey(String secretKey) {
        byte[] keyBytes = secretKey.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public Claims extractAllClaims(String token) throws ExpiredJwtException {
        return Jwts.parserBuilder()
                .setSigningKey(getSigningKey(SECRET_KEY))
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String getEmail(String token) {
        return extractAllClaims(token).get("email", String.class);
    }

    public Boolean isTokenExpired(String token) {
        final Date expiration = extractAllClaims(token).getExpiration();
        return expiration.before(new Date());
    }

    public String generateToken(Member member) {
        return doGenerateToken(member.getEmail(), TOKEN_VALIDATION_SECOND);
    }

    public String generateRefreshToken(Member member) {
        return doGenerateToken(member.getEmail(), REFRESH_TOKEN_VALIDATION_SECOND);
    }

    // JWT 생성
    private String doGenerateToken(String email, long tokenValidationSecond) {

        Claims claims = Jwts.claims();
        claims.put("email", email);

        String jwt = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + tokenValidationSecond))
                .signWith(getSigningKey(SECRET_KEY), SignatureAlgorithm.HS256)
                .compact();

        return jwt;
    }

    // 토큰의 만료일자 검사
    public Boolean validateToken(String token, CustomUserDetails customUserDetails) {
        final String email = getEmail(token);

        return (email.equals(customUserDetails.getUsername())) && !isTokenExpired(token);
    }
}
