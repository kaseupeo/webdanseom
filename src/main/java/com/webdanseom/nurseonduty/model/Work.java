package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * 근무(Work) 테이블
 */
@Entity
@Table(name = "Work")
@Getter
@Setter
@NoArgsConstructor
public class Work {

    @Id
    private  int workNum;

    private  String duty;

    @Temporal(TemporalType.DATE)
    private Date date;

    public Work(int workNum, String duty, Date date) {
        this.workNum = workNum;
        this.duty = duty;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Work{" +
                "workNum=" + workNum +
                ", duty='" + duty + '\'' +
                ", date=" + date +
                '}';
    }
}
