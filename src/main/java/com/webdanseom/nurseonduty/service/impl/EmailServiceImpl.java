package com.webdanseom.nurseonduty.service.impl;
/**
 * 파일명: EmailServiceImpl.java
 * 설명: 이메일를 보내주는 서비스
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자:
 * 수정자:
 */
import com.webdanseom.nurseonduty.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    @Override
    public void sendEmail(String to, String sub, String text) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject(sub);
        message.setText(text);
        javaMailSender.send(message);
    }
}
