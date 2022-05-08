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
@Table(name = "WorkExtra")
@Getter
@Setter
@NoArgsConstructor
public class WorkExtra {

    //임시근무번호
    @Id
    private  int workExtraNum;

    //임시듀티
    private  String duty;

    //임시근무일
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
