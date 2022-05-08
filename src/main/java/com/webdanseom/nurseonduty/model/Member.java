package com.webdanseom.nurseonduty.model;
/**
 * 파일명: Member.java
 * 설명: 회원(Member) 테이블
 * 작성일자:2022.05.04
 * 작성자:신동현
 * 수정일자: 2022.05.08
 * 수정자:표영운
 */
import com.webdanseom.nurseonduty.config.UserRole;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Date;


@Entity
@Table(name = "Member")
@Getter
@Setter
public class Member {

    //회원번호
    @Id
    @GeneratedValue
    private int seq;

    //이메일
    @Column(unique = true)
    @NotBlank(message = "이메일을 입력하세요.")
    @Pattern(regexp = "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",
            message = "이메일 형식이 맞지 않습니다.")
    private String email;

    //이름
    @NotBlank
    private String name;

    //비밀번호
    @NotNull
    @Pattern(regexp = "^.*(?=^.{8,15}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$", message = "비밀번호는 영문, 숫자, 특수기호가 최소 1개 이상 포함되어야합니다.")
    private String password;

    //핸드폰번호
    @NotBlank
    private String phoneNumber;

    //소셜(카카오톡, 네이버 등)아이디
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "social_id")
    private SocialData socialData;

    //로그인을 위한 정보
    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.ROLE_NOT_PERMITTED;

    //가입날짜
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createAt;

    //회원정보 수정날짜
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updateAt;

    //아이디 암호화
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "salt_id")
    private Salt salt;

    public Member() {}

    public Member(@NotBlank String email, @NotBlank String name, @NotBlank String password, @NotBlank String phoneNumber) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Member{" +
                "seq=" + seq +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", phone_number='" + phoneNumber + '\'' +
                ", role=" + role +
                ", createAt=" + createAt +
                ", updateAt=" + updateAt +
                '}';
    }
}
