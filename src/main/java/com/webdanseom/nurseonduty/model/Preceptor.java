package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Precepter.java
 * 설명: 프리셉터(Preceptor) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;



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
