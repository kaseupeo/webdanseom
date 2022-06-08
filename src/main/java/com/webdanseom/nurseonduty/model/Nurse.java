package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Nurse.java
 * 설명: 간호사(Nurse) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.17
 * 수정자:신동현
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "Nurse")
@Getter
@Setter
@NoArgsConstructor
public class Nurse {

    //간호사번호 (기본키)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nurseSeq;

    //그룹번호 (기본키) --- 외래키
    @ManyToOne
    @JoinColumn(name = "nurseGroup")
    private NurseGroup nurseGroup;

    //간호사 이름
    @NotNull
    private String name;
    
    //전담
    private String charge;

    //직책
    @NotNull
    private String position;
    
    //연차
    @NotNull
    private double annualLeave;

    public Nurse(int nurseSeq, NurseGroup nurseGroup, String name, String charge, String position, double annualLeave) {
        this.nurseSeq = nurseSeq;
        this.nurseGroup = nurseGroup;
        this.name = name;
        this.charge = charge;
        this.position = position;
        this.annualLeave = annualLeave;
    }

    @Override
    public String toString() {
        return "Nurse{" +
                "nurseSeq=" + nurseSeq +
                ", nurseGroup=" + nurseGroup +
                ", name='" + name + '\'' +
                ", charge='" + charge + '\'' +
                ", position='" + position + '\'' +
                ", annualLeave=" + annualLeave +
                '}';
    }
}
