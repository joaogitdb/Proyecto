package com.empresa.inetum.gestor_reservas.security;

import com.empresa.inetum.gestor_reservas.model.Usuario;
import com.empresa.inetum.gestor_reservas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.*;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UsuarioRepository repo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario user = repo.findByUsername(username)
        		.orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

        // Convierte tu enum Rol en una autoridad de Spring
        SimpleGrantedAuthority authority =
          new SimpleGrantedAuthority("ROLE_" + user.getRol().name());

        return User.builder()
                   .username(user.getUsername())
                   .password(user.getPasswordHash())
                   .authorities(authority)
                   .build();
    }
}
