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
import javax.persistence.JoinColumn;
import javax.validation.constraints.NotNull;


@Entity
@Getter
@Setter
@NoArgsConstructor
public class Preceptor {

    //프리셉터 번호
    @Id
    @GeneratedValue
    private int preceptorSeq;

    //주임(담당) 간호사  --- 외래키 (간호사번호)
    @NotNull
    @JoinColumn(name = "preceptor_seq")
    private String headNurseName;

    //신입 간호사
    @NotNull
    private String newNurseName;

    public Preceptor(int preceptorSeq, String headNurseName, String newNurseName) {
        this.preceptorSeq = preceptorSeq;
        this.headNurseName = headNurseName;
        this.newNurseName = newNurseName;
    }

    @Override
    public String toString() {
        return "Preceptor{" +
                "preceptorNum=" + preceptorSeq +
                ", headNurseName='" + headNurseName + '\'' +
                ", newNurseName='" + newNurseName + '\'' +
                '}';
    }
}
