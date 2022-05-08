package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Salt.java
 * 설명: SecurityMember를 통해 jwt 토큰으로 변경된 비밀전호를 다시 암호화
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
