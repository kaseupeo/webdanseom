package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Nurse.java
 * 설명: 간호사(Nurse) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.17
 * 수정자:신동현
 */
import com.webdanseom.nurseonduty.model.id.NurseId;
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
@IdClass(NurseId.class)
public class Nurse {

    //간호사번호 (기본키)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int nurseSeq;

    //그룹번호 (기본키) --- 외래키
    @Id
    @ManyToOne
    @JoinColumn(name = "nurseGroup")
    private NurseGroup nurseGroup;

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

    //프리셉터 --- 외래키
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "preceptorSeq")
    private Preceptor preceptorSeq;

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
