package com.webdanseom.nurseonduty.model;

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


    @Id
    @GeneratedValue
    private int seq;

    @Column(unique = true)
    @NotBlank(message = "이메일을 입력하세요.")
    @Pattern(regexp = "^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$",
            message = "이메일 형식이 맞지 않습니다.")
    private String email;

    @NotBlank(message = "이름을 입력하세요.")
    private String name;

    @NotNull(message = "비밀번호를 입력하세요.")
    @Pattern(regexp = "^.*(?=^.{8,15}$)(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$", message = "비밀번호는 영문, 숫자, 특수기호가 최소 1개 이상 포함되어야합니다.")
    private String password;

    @NotBlank(message = "전화번호를 입력하세요.")
    private String phone_number;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private UserRole role = UserRole.ROLE_NOT_PERMITTED;

    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createAt;

    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updateAt;

    public Member() {}

    public Member(@NotBlank String email, @NotBlank String name, @NotBlank String password, @NotBlank String phone_number) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.phone_number = phone_number;
    }

    @Override
    public String toString() {
        return "Member{" +
                "seq=" + seq +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", password='" + password + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", role=" + role +
                ", createAt=" + createAt +
                ", updateAt=" + updateAt +
                '}';
    }
}
