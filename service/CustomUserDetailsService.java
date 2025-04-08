package com.example.FinalProject.service;

import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 테스트용 하드코딩된 사용자 정보
        if ("admin".equals(username)) {
            return new User(
                "admin",
                "",  // 비밀번호는 JWT 토큰으로 처리되므로 빈 문자열로 설정
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"))
            );
        } else if ("ceo".equals(username)) {
            return new User(
                "ceo",
                "",
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_CEO"))
            );
        } else if ("user".equals(username)) {
            return new User(
                "user",
                "",
                Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"))
            );
        }
        
        throw new UsernameNotFoundException("User not found: " + username);
    }
}
