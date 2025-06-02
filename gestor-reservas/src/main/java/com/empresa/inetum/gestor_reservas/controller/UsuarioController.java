package com.empresa.inetum.gestor_reservas.controller;

import com.empresa.inetum.gestor_reservas.model.Usuario;
import com.empresa.inetum.gestor_reservas.repository.UsuarioRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private final UsuarioRepository usuarioRepo;

    public UsuarioController(UsuarioRepository usuarioRepo) {
        this.usuarioRepo = usuarioRepo;
    }

    @GetMapping
    public List<Usuario> getAll() {
        return usuarioRepo.findAll();
    }
}
