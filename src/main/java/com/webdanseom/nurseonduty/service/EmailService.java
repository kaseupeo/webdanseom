package com.webdanseom.nurseonduty.service;

public interface EmailService {
    void sendEmail(String to, String sub, String text);
}
