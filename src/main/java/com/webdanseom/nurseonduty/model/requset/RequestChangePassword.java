package com.webdanseom.nurseonduty.model.requset;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestChangePassword {
    private String email;
    private String password;
}
