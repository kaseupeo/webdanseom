package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * 듀티(Duty) 테이블
 */
@Entity
@Table(name = "Duty")
@Getter
@Setter
@NoArgsConstructor
public class Duty {

    @Id
    private String dutyCode;

    private String dutyCodeName;

    private String workingHours;

    private String workType;

    private String hexColor;

    @Temporal(TemporalType.TIME)
    private Date time;

    private Boolean dutyUse;

    public Duty(String dutyCode, String dutyCodeName, String workingHours, String workType, String hexColor, Date time, Boolean dutyUse) {
        this.dutyCode = dutyCode;
        this.dutyCodeName = dutyCodeName;
        this.workingHours = workingHours;
        this.workType = workType;
        this.hexColor = hexColor;
        this.time = time;
        this.dutyUse = dutyUse;
    }

    @Override
    public String toString() {
        return "Duty{" +
                "dutyCode='" + dutyCode + '\'' +
                ", dutyCodeName='" + dutyCodeName + '\'' +
                ", workingHours='" + workingHours + '\'' +
                ", workType='" + workType + '\'' +
                ", hexColor='" + hexColor + '\'' +
                ", time=" + time +
                ", dutyUse=" + dutyUse +
                '}';
    }
}
