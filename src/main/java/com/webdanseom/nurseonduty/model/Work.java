package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

/**
 * 근무(Work) 테이블
 */
@Entity
@Table(name = "Work")
@Getter
@Setter
public class Work {

    @Id
    private  int workNum;

    private  String duty;

    private Date date;
}
