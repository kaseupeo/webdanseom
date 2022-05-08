package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Duty.java
 * 설명: 듀티(Duty) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Duty")
@Getter
@Setter
@NoArgsConstructor
@IdClass(NurseGroup.class)
public class Duty {

    //듀티코드(기본키) 
    @Id
    private String dutyCode;
    //그룹번호(기본키) ---  외래키
    @Id
    @ManyToOne
    @JoinColumn(name = "groupSeq")
    private NurseGroup groupSeq;

    //듀티 풀네임
    private String dutyCodeName;
    //근로시간
    private int workingHours;
    //근로유형
    private String workType;
    //색상
    private String hexColor;
    //근무시작시간
    @Temporal(TemporalType.TIME)
    private Date startTime;
    //사용여부
    private Boolean isUseable;


    public Duty(String dutyCode, String dutyCodeName, int workingHours, String workType, String hexColor, Date startTime, Boolean isUseable) {
        this.dutyCode = dutyCode;
        this.dutyCodeName = dutyCodeName;
        this.workingHours = workingHours;
        this.workType = workType;
        this.hexColor = hexColor;
        this.startTime = startTime;
        this.isUseable = isUseable;
    }

    @Override
    public String toString() {
        return "Duty{" +
                "dutyCode='" + dutyCode + '\'' +
                ", dutyCodeName='" + dutyCodeName + '\'' +
                ", workingHours='" + workingHours + '\'' +
                ", workType='" + workType + '\'' +
                ", hexColor='" + hexColor + '\'' +
                ", time=" + startTime +
                ", dutyUse=" + isUseable +
                '}';
    }
}
