package com.empresa.inetum.gestor_reservas.controller;


import com.empresa.inetum.gestor_reservas.model.Paciente;
import com.empresa.inetum.gestor_reservas.repository.PacienteRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pacientes")
public class PacienteController {

    private final PacienteRepository repo;

    public PacienteController(PacienteRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Paciente> listar() {
        return repo.findAll();
    }

    @PostMapping
    public Paciente crear(@RequestBody Paciente paciente) {
        return repo.save(paciente);
    }

    @GetMapping("{id}")
    public Paciente buscar(@PathVariable Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("No existe paciente con id " + id));
    }

    @PutMapping("{id}")
    public Paciente actualizar(@PathVariable Long id, @RequestBody Paciente p) {
        p.setPacienteId(id);
        return repo.save(p);
    }

    @DeleteMapping("{id}")
    public void borrar(@PathVariable Long id) {
        repo.deleteById(id);
    }
}
