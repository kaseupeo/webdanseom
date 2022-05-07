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
