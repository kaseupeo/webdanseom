package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * 근무조정(WorkAdjust) 테이블
 */
@Entity
@Table(name = "WorkAdjust")
@Getter
@Setter
@NoArgsConstructor
public class WorkAdjust {

    @Id
    @GeneratedValue
    private int workAdjustNum;

    private String duty;

    private String requester;

    private String requestReason;

    @Temporal(TemporalType.DATE)
    private Date date;

    public WorkAdjust(int workAdjustNum, String duty, String requester, String requestReason, Date date) {
        this.workAdjustNum = workAdjustNum;
        this.duty = duty;
        this.requester = requester;
        this.requestReason = requestReason;
        this.date = date;
    }

    @Override
    public String toString() {
        return "WorkAdjust{" +
                "workAdjustNum=" + workAdjustNum +
                ", duty='" + duty + '\'' +
                ", requester='" + requester + '\'' +
                ", requestReason='" + requestReason + '\'' +
                ", date=" + date +
                '}';
    }
}
