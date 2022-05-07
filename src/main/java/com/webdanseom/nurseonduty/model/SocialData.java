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

    @Id
    @GeneratedValue
    private int id;

    private String email;
    private String type;

    @OneToOne(mappedBy = "socialData")
    private Member member;

    public SocialData(String email, String type) {
        this.email = email;
        this.type = type;
    }
}
