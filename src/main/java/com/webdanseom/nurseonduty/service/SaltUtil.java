package com.webdanseom.nurseonduty.service;
/**
 * 파일명: NurseondutyApplication.java
 * 설명: SaltUtil
 * 작성일자:2022.04.29
 * 작성자:신동현
 * 수정일자: 2022.05.12
 * 수정자: 표영운
 */
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.stereotype.Service;

@Service
public class SaltUtil {

    public String encodePassword(String salt, String password) {
        return BCrypt.hashpw(password, salt);
    }

    public static String genSalt() {
        return BCrypt.gensalt();
    }
}
