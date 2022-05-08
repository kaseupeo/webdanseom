package com.webdanseom.nurseonduty.model;
/**
 * 파일명: WorkAdjust.java
 * 설명: 근무조정(WorkAdjust) 테이블
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
@Table(name = "WorkAdjust")
@Getter
@Setter
@NoArgsConstructor
public class WorkAdjust {

    //근무조정번호
    @Id
    @GeneratedValue
    private int workAdjustSeq;

    //조정 듀티
    private String duty;

    //요청자
    private String requester;

    //사유
    private String requestReason;

    //조정요청일
    @Temporal(TemporalType.DATE)
    private Date date;

    public WorkAdjust(int workAdjustNum, String duty, String requester, String requestReason, Date date) {
        this.workAdjustSeq = workAdjustNum;
        this.duty = duty;
        this.requester = requester;
        this.requestReason = requestReason;
        this.date = date;
    }

    @Override
    public String toString() {
        return "WorkAdjust{" +
                "workAdjustNum=" + workAdjustSeq +
                ", duty='" + duty + '\'' +
                ", requester='" + requester + '\'' +
                ", requestReason='" + requestReason + '\'' +
                ", date=" + date +
                '}';
    }
}
