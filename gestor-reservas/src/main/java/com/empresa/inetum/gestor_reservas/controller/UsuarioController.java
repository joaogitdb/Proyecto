package com.empresa.inetum.gestor_reservas.controller;

import com.empresa.inetum.gestor_reservas.model.Establecimiento;
import com.empresa.inetum.gestor_reservas.model.Usuario;
import com.empresa.inetum.gestor_reservas.repository.UsuarioRepository;

import jakarta.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    private final UsuarioRepository repository;

    public UsuarioController(UsuarioRepository usuarioRepo) {
        this.repository = usuarioRepo;
    }

    @GetMapping
    public List<Usuario> getAll() {
        return repository.findAll();
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(u -> ResponseEntity.ok(u))
                .orElse(ResponseEntity.notFound().build());
    }
    
    @PostMapping
    public Usuario create(@Valid @RequestBody Usuario usuario) {
        return repository.save(usuario);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Usuario> update(@PathVariable Long id, @Valid @RequestBody Usuario usuario) {
		return repository.findById(id)
				.map(existing -> {
					usuario.setId(existing.getId());
					return ResponseEntity.ok(repository.save(usuario));
				})
				.orElse(ResponseEntity.notFound().build());
	}
    
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
		return repository.findById(id)
				.map(existing -> {
					repository.delete(existing);
					return ResponseEntity.noContent().build();
				})
				.orElse(ResponseEntity.notFound().build());
	}
}
