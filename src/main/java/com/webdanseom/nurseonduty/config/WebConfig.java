package com.webdanseom.nurseonduty.config;

/**
 * 파일명: UserRole.java
 * 설명: front랑 연동할 때 쓰는 뼈대
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry corsRegistry) {
        corsRegistry.addMapping("/**")
                .allowCredentials(true)
                .allowedOrigins("http://localhost:3000")
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
