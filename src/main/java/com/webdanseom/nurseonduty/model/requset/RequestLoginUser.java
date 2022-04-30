package com.webdanseom.nurseonduty.model.requset;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestLoginUser {
    private String email;
    private String password;

    public RequestLoginUser(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
