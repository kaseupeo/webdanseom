package com.webdanseom.nurseonduty.config;
/**
 * 파일명: SecurityConfig.java
 * 설명: api 관리하는 클레스
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 
 * 수정자:
 */
import com.google.common.base.Predicates;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
                .apis(Predicates.not(RequestHandlerSelectors
                        .basePackage("org.springframework.boot")))
                .paths(PathSelectors.any()).build();
    }
}
