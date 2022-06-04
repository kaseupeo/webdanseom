package com.webdanseom.nurseonduty.model.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RequestUpdatePassword {
    private String beforePassword;
    private String afterPassword;
}
