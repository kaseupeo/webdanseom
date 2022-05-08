package com.webdanseom.nurseonduty.model;
/**
 * 파일명: SocialData.java
 * 설명: ???
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
public class SocialData {

    //소셜 id
    @Id
    @GeneratedValue
    private int id;

    //소셜 이메일
    private String email;

    //소셜 id
    private String type;

    //회원과 외래키
    @OneToOne(mappedBy = "socialData")
    private Member member;

    public SocialData(String email, String type) {
        this.email = email;
        this.type = type;
    }
}
