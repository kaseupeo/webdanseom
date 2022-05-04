package com.webdanseom.nurseonduty.model;

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

    @OneToOne(mappedBy = "social")
    private Member member;

    public SocialData(String email, String type) {
        this.email = email;
        this.type = type;
    }
}
