package com.empresa.inetum.gestor_reservas.controller;

import com.empresa.inetum.gestor_reservas.model.Establecimiento;
import com.empresa.inetum.gestor_reservas.repository.EstablecimientoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/establecimientos")
@CrossOrigin(origins = "http://localhost:4200")
public class EstablecimientoController {

    private final EstablecimientoRepository repository;

    public EstablecimientoController(EstablecimientoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Establecimiento> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Establecimiento> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Establecimiento create(@Valid @RequestBody Establecimiento establecimiento) {
        return repository.save(establecimiento);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Establecimiento> update(@PathVariable Long id, @Valid @RequestBody Establecimiento establecimiento) {
        return repository.findById(id)
                .map(existing -> {
                    establecimiento.setId(existing.getId());
                    return ResponseEntity.ok(repository.save(establecimiento));
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
