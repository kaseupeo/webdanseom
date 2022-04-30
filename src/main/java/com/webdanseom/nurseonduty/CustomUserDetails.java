package com.webdanseom.nurseonduty;

import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;
import java.util.Collection;

@Getter
public class CustomUserDetails implements UserDetails, Serializable {

    private String email;
    private String password;
    private String name;
    private String phoneNumber;
    private Collection<GrantedAuthority> authorities;

    /**
     * 해당 유저의 권한 목록
     */
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    /**
     * email
     * @return
     */
    @Override
    public String getUsername() {
        return email;
    }

    /**
     * 계정 만료 여부
     * true : 만료X
     * false : 만료O
     * @return
     */
    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    /**
     * 계정 잠김 여부
     * true : 잠김X
     * false : 잠김O
     * @return
     */
    @Override
    public boolean isAccountNonLocked() {
        return false;
    }
    /**
     * 비밀번호 만료 여부
     * true : 만료X
     * false : 만료O
     * @return
     */
    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    /**
     * 사용자 활성화 여부
     * true : 활성화
     * false : 비활성화
     * @return
     */
    @Override
    public boolean isEnabled() {
        return false;
    }
}
