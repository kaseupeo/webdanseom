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
import org.hibernate.annotations.ColumnDefault;
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
    @Column(name = "group_seq")
    private int groupSeq;

    //그룹이름
    @NotNull
    private String groupName;

    //수간호사번호
    @NotBlank
    private int headNurseNum;

    //최소 Day 근무
    @NotNull
    private int numberOfDays;

    //최소 Evening 근무
    @NotNull
    private int numberOfEvenings;

    //최소 Night 근무
    @NotNull
    private int numberOfNights;

    //초대링크
    @NotNull
    private String inviteLink;

    //초대링크 만료일
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date inviteDate;

    public NurseGroup(int groupSeq, String groupName, int headNurseNum, int numberOfDays,
                      int numberOfEvenings, int numberOfNights, String inviteLink, Date inviteDate) {
        this.groupSeq = groupSeq;
        this.groupName = groupName;
        this.headNurseNum = headNurseNum;
        this.numberOfDays = numberOfDays;
        this.numberOfEvenings = numberOfEvenings;
        this.numberOfNights = numberOfNights;
        this.inviteLink = inviteLink;
        this.inviteDate = inviteDate;
    }

    @Override
    public String toString() {
        return "NurseGroup{" +
                "groupNum=" + groupSeq +
                ", groupName='" + groupName + '\'' +
                ", headNurseNum=" + headNurseNum +
                ", numberOfDays=" + numberOfDays +
                ", numberOfEvenings=" + numberOfEvenings +
                ", numberOfNights=" + numberOfNights +
                '}';
    }
}
