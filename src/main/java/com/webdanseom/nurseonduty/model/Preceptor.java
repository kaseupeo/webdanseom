package com.webdanseom.nurseonduty.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * 프리셉터(Preceptor) 테이블
 */
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Preceptor {

    @Id
    @GeneratedValue
    private int preceptorNum;

    private String headNurseName;

    private String newNurseName;

    public Preceptor(int preceptorNum, String headNurseName, String newNurseName) {
        this.preceptorNum = preceptorNum;
        this.headNurseName = headNurseName;
        this.newNurseName = newNurseName;
    }

    @Override
    public String toString() {
        return "Preceptor{" +
                "preceptorNum=" + preceptorNum +
                ", headNurseName='" + headNurseName + '\'' +
                ", newNurseName='" + newNurseName + '\'' +
                '}';
    }
}
