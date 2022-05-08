package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Nurse.java
 * 설명: 간호사(Nurse) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "Nurse")
@Getter
@Setter
@NoArgsConstructor
public class Nurse {

    //간호사번호
    @Id
    private int nurseSeq;

    //간호사 이름
    @NotBlank
    private String name;
    
    //전담
    @NotNull
    private String charge;

    //직책
    @NotNull
    private String position;
    
    //연차
    @NotNull
    private double annualLeave;

    //회원정보 --- 외래키
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "memberSeq")
    private Member memberSeq;

    //그룹번호 --- 외래키
    @ManyToOne
    @JoinColumn(name = "groupSeq")
    private NurseGroup groupSeq;


    public Nurse(int nurseNum, String name, String charge, String position, double annualLeave) {
        this.nurseSeq = nurseNum;
        this.name = name;
        this.charge = charge;
        this.position = position;
        this.annualLeave = annualLeave;
    }

    @Override
    public String toString() {
        return "Nurse{" +
                "nurseNum=" + nurseSeq +
                ", name='" + name + '\'' +
                ", charge='" + charge + '\'' +
                ", position='" + position + '\'' +
                ", annualLeave=" + annualLeave +
                '}';
    }
}
