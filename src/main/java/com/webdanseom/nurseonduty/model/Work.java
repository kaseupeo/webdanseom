package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "Work")
@Getter
@Setter
public class Work {
    private  int workNum;
    private  String duty;
    private Date date;
}
