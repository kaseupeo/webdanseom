package com.webdanseom.nurseonduty.model.request;

import com.webdanseom.nurseonduty.model.Duty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class RequestDutyList {
    private List<Duty> dutyList;
}
