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

import javax.persistence.*;
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
    private int headNurseNum;

    //신입 간호사
    @NotNull
    private int newNurseNum;

    public Preceptor(int preceptorSeq, int headNurseNum, int newNurseNum) {
        this.preceptorSeq = preceptorSeq;
        this.headNurseNum = headNurseNum;
        this.newNurseNum = newNurseNum;
    }

    @Override
    public String toString() {
        return "Preceptor{" +
                "preceptorNum=" + preceptorSeq +
                ", headNurseName='" + headNurseNum + '\'' +
                ", newNurseName='" + newNurseNum + '\'' +
                '}';
    }
}
