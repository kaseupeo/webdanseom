package com.webdanseom.nurseonduty.model.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ResponseNursesName {
    private int seq;
    private String chargeNurseName;
    private String newNurseName;

    public ResponseNursesName(int seq, String chargeNurseName, String newNurseName) {
        this.seq = seq;
        this.chargeNurseName = chargeNurseName;
        this.newNurseName = newNurseName;
    }
}
