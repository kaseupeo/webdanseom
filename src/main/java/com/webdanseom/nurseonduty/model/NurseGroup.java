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
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Entity
@Table(name = "Nurse_Group")
@Getter
@Setter
@NoArgsConstructor
public class NurseGroup {
    //그룹번호
    @Id
    @GeneratedValue
    private int seq;

    //그룹이름
    @NotNull
    private String groupName;

    //수간호사번호
    @NotNull
    private int headNurseNum;

    //초대링크
    @NotNull
    private String inviteLink;


    //최소 Day 근무
    @NotNull
    private int numberOfDays;

    //최소 Evening 근무
    @NotNull
    private int numberOfEvenings;

    //최소 Night 근무
    @NotNull
    private int numberOfNights;


    //초대링크 만료일


    public NurseGroup(int seq, String groupName, int headNurseNum, String inviteLink,
                      int numberOfDays, int numberOfEvenings, int numberOfNights) {
        this.seq = seq;
        this.groupName = groupName;
        this.headNurseNum = headNurseNum;
        this.inviteLink = inviteLink;
        this.numberOfDays = numberOfDays;
        this.numberOfEvenings = numberOfEvenings;
        this.numberOfNights = numberOfNights;
    }

    @Override
    public String toString() {
        return "NurseGroup{" +
                "groupNum=" + seq +
                ", groupName='" + groupName + '\'' +
                ", headNurseNum=" + headNurseNum +
                ", inviteLink=" + inviteLink +
                ", numberOfDays=" + numberOfDays +
                ", numberOfEvenings=" + numberOfEvenings +
                ", numberOfNights=" + numberOfNights +
                '}';
    }
}
