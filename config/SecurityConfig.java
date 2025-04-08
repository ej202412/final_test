package com.example.FinalProject.config;

import com.example.FinalProject.filter.JwtFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity(securedEnabled = true )
public class SecurityConfig {

    @Value("${jwt.name}") private String jwtName;

    @Autowired private JwtFilter jwtFilter;

    @Bean
    PasswordEncoder passwordEncoder() {
        //여기서 리턴해주는 객체도 bean 으로 된다.
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        String[] whiteList= {"/", "/home", "/h2-console/**", "/student/**", "/teacher/**"};

        httpSecurity
                .headers(header->
                        //동일한 origin 에서 iframe 을 사용할수 있도록 설정(default 값은 사용불가)
                        header.frameOptions(option->option.sameOrigin()) //SmartEditor 에서 필요함
                )
                .csrf(csrf->csrf.disable())
                .authorizeHttpRequests(config ->
                        config
                                .requestMatchers(whiteList).permitAll()
                                .requestMatchers("/ceo/**").hasRole("CEO")
                                .requestMatchers("/admin/**").hasRole("ADMIN")
                                .anyRequest().authenticated()
                )
                .sessionManagement(config ->
                        //세션을 사용하지 않도록 설정한다.
                        config.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                //JwtFilter 를 Spring Security 필터보다 미리 수행되게 하기
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        // 설정 정보를 가지고 있는 HttpSecurity 객체의 build() 메소드를 호출해서 리턴되는 객체를 리턴해준다.
        return httpSecurity.build();
    }

    @Bean
 	AuthenticationManager authenticationManager(HttpSecurity http,
 			BCryptPasswordEncoder encoder, UserDetailsService service) throws Exception{
 		//적절한 설정을한 인증 메니저 객체를 리턴해주면 bean 이 되어서 Spring Security 가 사용한다 
 		return http.getSharedObject(AuthenticationManagerBuilder.class)
 				.userDetailsService(service)
 				.passwordEncoder(encoder)
 				.and()
 				.build();
 	}
}
