package com.empresa.inetum.gestor_reservas.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired private AuthenticationManager authManager;
    @Autowired private JwtUtil jwtUtil;
    @Autowired private UserDetailsServiceImpl uds;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest req) {
        authManager.authenticate(
          new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword())
        );
        UserDetails user = uds.loadUserByUsername(req.getUsername());
        AuthResponse resp = new AuthResponse(
          jwtUtil.generateToken(user.getUsername(),
            user.getAuthorities().stream()
              .map(a -> a.getAuthority()).toList()
          ),
          jwtUtil.generateRefreshToken(user.getUsername())
        );
        return ResponseEntity.ok(resp);
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestBody RefreshRequest req) {
        if (!jwtUtil.validate(req.getRefreshToken())) {
            return ResponseEntity.badRequest().build();
        }
        String username = jwtUtil.getClaims(req.getRefreshToken()).getSubject();
        UserDetails user = uds.loadUserByUsername(username);
        AuthResponse resp = new AuthResponse(
          jwtUtil.generateToken(username,
            user.getAuthorities().stream()
              .map(a -> a.getAuthority()).toList()
          ),
          jwtUtil.generateRefreshToken(username)
        );
        return ResponseEntity.ok(resp);
    }
}