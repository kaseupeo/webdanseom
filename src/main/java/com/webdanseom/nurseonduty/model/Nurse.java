package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

/**
 * 간호사(Nurse) 테이블
 */
@Entity
@Table(name = "Nurse")
@Getter
@Setter
@NoArgsConstructor
public class Nurse {

    @Id
    private int nurseNum;

    @NotBlank
    private String name;

    @NotNull
    private String charge;

    @NotNull
    private String position;

    @NotNull
    private double annualLeave;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "member_id")
    private Member seq;

    public Nurse(int nurseNum, String name, String charge, String position, double annualLeave) {
        this.nurseNum = nurseNum;
        this.name = name;
        this.charge = charge;
        this.position = position;
        this.annualLeave = annualLeave;
    }

    @Override
    public String toString() {
        return "Nurse{" +
                "nurseNum=" + nurseNum +
                ", name='" + name + '\'' +
                ", charge='" + charge + '\'' +
                ", position='" + position + '\'' +
                ", annualLeave=" + annualLeave +
                '}';
    }
}
