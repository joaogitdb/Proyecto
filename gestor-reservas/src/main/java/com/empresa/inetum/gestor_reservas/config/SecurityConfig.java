package com.empresa.inetum.gestor_reservas.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
          // 1) Lambda DSL para CSRF
          .csrf(AbstractHttpConfigurer::disable)

          // 2) Lambda DSL para autorizaciones
          .authorizeHttpRequests(auth -> auth
              .requestMatchers("/api/**", "/actuator/**").permitAll()
              .anyRequest().authenticated()
          )

          // 3) Lambda DSL para HTTP Basic
          .httpBasic(Customizer.withDefaults());

        return http.build();
    }
}