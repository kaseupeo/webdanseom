package com.webdanseom.nurseonduty.model.request;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class RequestWork {
    private String duty;
    private Date date;
    private int nurseSeq;
}
