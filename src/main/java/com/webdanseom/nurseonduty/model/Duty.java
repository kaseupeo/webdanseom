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
public class Duty {

    //듀티코드(기본키) 
    @Id
    private String dutyCode;
    //그룹번호 ---  외래키
    @ManyToOne
    @JoinColumn(name = "nurseGroup")
    private NurseGroup nurseGroup;

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
    private Boolean isUsable;
    //작성자
    private String creator;


    public Duty(String dutyCode, NurseGroup nurseGroup, String dutyCodeName, int workingHours, String workType,
                String hexColor, Date startTime, Boolean isUsable, String creator) {
        this.dutyCode = dutyCode;
        this.nurseGroup = nurseGroup;
        this.dutyCodeName = dutyCodeName;
        this.workingHours = workingHours;
        this.workType = workType;
        this.hexColor = hexColor;
        this.startTime = startTime;
        this.isUsable = isUsable;
        this.creator = creator;
    }

    @Override
    public String toString() {
        return "Duty{" +
                "dutyCode='" + dutyCode + '\'' +
                "nurseGroup'" + nurseGroup + '\'' +
                ", dutyCodeName='" + dutyCodeName + '\'' +
                ", workingHours='" + workingHours + '\'' +
                ", workType='" + workType + '\'' +
                ", hexColor='" + hexColor + '\'' +
                ", time=" + startTime +
                ", dutyUse=" + isUsable +
                ", creator=" + creator +
                '}';
    }
}
