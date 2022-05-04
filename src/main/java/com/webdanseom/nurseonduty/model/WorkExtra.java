package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * 임시근무(WorkExtra) 테이블
 */
@Entity
@Table(name = "WorkExtra")
@Getter
@Setter
@NoArgsConstructor
public class WorkExtra {

    @Id
    private  int workExtraNum;

    private  String duty;

    @Temporal(TemporalType.DATE)
    private Date date;

    public WorkExtra(int workNum, String duty, Date date) {
        this.workExtraNum = workNum;
        this.duty = duty;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Work{" +
                "workNum=" + workExtraNum +
                ", duty='" + duty + '\'' +
                ", date=" + date +
                '}';
    }
}
