package com.webdanseom.nurseonduty.model;
/**
 * 파일명: NurseGroup.java
 * 설명: 그룹(group) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "Nurse_Group")
@Getter
@Setter
@NoArgsConstructor
public class NurseGroup {

    @Id
    @GeneratedValue
    private int groupNum;

    @NotNull
    private String groupName;

    @NotBlank
    private int headNurseNum;

    @NotNull
    private int numberOfDays;

    @NotNull
    private int numberOfEvenings;

    @NotNull
    private int numberOfNights;

    public NurseGroup(int groupNum, String groupName, int headNurseNum, int numberOfDays, int numberOfEvenings, int numberOfNights) {
        this.groupNum = groupNum;
        this.groupName = groupName;
        this.headNurseNum = headNurseNum;
        this.numberOfDays = numberOfDays;
        this.numberOfEvenings = numberOfEvenings;
        this.numberOfNights = numberOfNights;
    }

    @Override
    public String toString() {
        return "NurseGroup{" +
                "groupNum=" + groupNum +
                ", groupName='" + groupName + '\'' +
                ", headNurseNum=" + headNurseNum +
                ", numberOfDays=" + numberOfDays +
                ", numberOfEvenings=" + numberOfEvenings +
                ", numberOfNights=" + numberOfNights +
                '}';
    }
}
