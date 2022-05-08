package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Salt.java
 * 설명: jwt를 좀 더 암호화해서 보완
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
@Getter
@Setter
public class Salt {

    @Id
    @GeneratedValue
    private int id;

    @NotNull
    private String salt;

    public Salt() {}

    public Salt(String salt) {
        this.salt = salt;
    }
}
