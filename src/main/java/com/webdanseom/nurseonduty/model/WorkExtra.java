package com.webdanseom.nurseonduty.model;
/**
 * 파일명: WorkExtra.java
 * 설명: 임시근무(WorkExtra) 테이블
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

/**
 *
 */
@Entity
@Table(name = "Work_Extra")
@Getter
@Setter
@NoArgsConstructor
public class WorkExtra {

    //임시근무번호 (기본키)
    @Id
    private int workExtraSeq;

    //그룹번호 (기본키) --- 외래키
    @ManyToOne(optional = false)
    @JoinColumn(name = "nurseGroup", nullable = false)
    private NurseGroup nurseGroup;

    //임시듀티
    private  String duty;

    //임시근무일
    @Temporal(TemporalType.DATE)
    private Date date;

    //간호사 번호 --- 외래키
    @ManyToOne
    @JoinColumn(name="nurse")
    private Nurse nurseSeq;

    public WorkExtra(int workExtraSeq, String duty, Date date, Nurse nurseSeq) {
        this.workExtraSeq = workExtraSeq;
        this.duty = duty;
        this.date = date;
        this.nurseSeq = nurseSeq;
    }

    @Override
    public String toString() {
        return "Work{" +
                "workNum=" + workExtraSeq +
                ", duty='" + duty + '\'' +
                ", date=" + date +
                ", nurseSeq=" + nurseSeq +
                '}';
    }
}
