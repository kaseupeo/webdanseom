package com.webdanseom.nurseonduty.model.requset;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class RequestSocialData {
    private String email;
    private String name;
    private String phoneNumber;
    private String type;
}
