package com.empresa.inetum.gestor_reservas.controller;


import com.empresa.inetum.gestor_reservas.model.Paciente;
import com.empresa.inetum.gestor_reservas.repository.PacienteRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/pacientes")
@CrossOrigin(origins = "http://localhost:4200")
public class PacienteController {

    private final PacienteRepository repository;

    public PacienteController(PacienteRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Paciente> getAll(@RequestParam(required = false) String nombre) {
    	
    	System.out.println("Nombre recibido: ");
        if (nombre != null) {
            return repository.findByNombreContainingIgnoreCase(nombre);
        }
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Paciente> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Paciente create(@Valid @RequestBody Paciente paciente) {
        return repository.save(paciente);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Paciente> update(@PathVariable Long id, @Valid @RequestBody Paciente paciente) {
        return repository.findById(id)
                .map(existing -> {
                    paciente.setId(existing.getId());
                    return ResponseEntity.ok(repository.save(paciente));
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


