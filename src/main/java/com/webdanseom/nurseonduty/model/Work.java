package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Work.java
 * 설명: 근무(Work) 테이블
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
@Table(name = "Work")
@Getter
@Setter
@NoArgsConstructor
@IdClass(NurseGroup.class)
public class Work {

    //근무번호 (기본키)
    @Id
    private  int workSeq;
    //그룹번호 (기본키) --- 외래키
    @Id
    @ManyToOne
    @JoinColumn(name = "group-seq", nullable = false)
    private  NurseGroup groupSeq;
    
    //듀티
    private  String duty;

    //근무날짜 (년월일)
    @Temporal(TemporalType.DATE)
    private Date date;

    //생성자
    public Work(int workSeq, String duty, Date date) {
        this.workSeq = workSeq;
        this.duty = duty;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Work{" +
                "workNum=" + workSeq +
                ", duty='" + duty + '\'' +
                ", date=" + date +
                '}';
    }
}
