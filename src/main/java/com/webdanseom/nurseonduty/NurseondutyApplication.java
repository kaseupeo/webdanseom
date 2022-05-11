package com.webdanseom.nurseonduty;
/**
 * 파일명: NurseondutyApplication.java
 * 설명: 프로그램 전체 실행
 * 작성일자:2022.04.06
 * 작성자:신동현
 * 수정일자: 2022.05.12
 * 수정자: 표영운
 */
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@Slf4j
@SpringBootApplication
public class NurseondutyApplication {
	public static void main(String[] args) {
		SpringApplication.run(NurseondutyApplication.class, args);
	}
}
