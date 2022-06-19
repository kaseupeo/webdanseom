package com.webdanseom.nurseonduty.model.response;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class ResponseWork {
    private int nurseSeq;
    private Date date;
    private String duty;

    public ResponseWork(int nurseSeq, Date date, String duty) {
        this.nurseSeq = nurseSeq;
        this.date = date;
        this.duty = duty;
    }
}
