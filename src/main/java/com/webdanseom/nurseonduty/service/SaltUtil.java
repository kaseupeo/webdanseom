package com.webdanseom.nurseonduty.service;

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
