package com.empresa.inetum.gestor_reservas.controller;

import com.empresa.inetum.gestor_reservas.model.Reserva;
import com.empresa.inetum.gestor_reservas.repository.ReservaRepository;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import jakarta.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

    private final ReservaRepository repository;

    public ReservaController(ReservaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Reserva> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reserva> getById(@PathVariable Long id) {
        return repository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Reserva> create(@Valid @RequestBody Reserva reserva) {
        if (reserva.getFechaEntrada().isAfter(reserva.getFechaSalida())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La fecha de entrada debe ser anterior a la fecha de salida");
        }
        return new ResponseEntity<>(repository.save(reserva), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Reserva> update(@PathVariable Long id, @Valid @RequestBody Reserva reserva) {
        if (reserva.getFechaEntrada().isAfter(reserva.getFechaSalida())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "La fecha de entrada debe ser anterior a la fecha de salida");
        }
        return repository.findById(id)
                .map(existing -> {
                    reserva.setId(existing.getId());
                    return ResponseEntity.ok(repository.save(reserva));
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

    // Endpoints de filtrado
    @GetMapping("/filtro/entrada")
    public List<Reserva> filterByEntrada(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime inicio) {
        return repository.findByFechaEntradaAfter(inicio);
    }

    @GetMapping("/filtro/salida")
    public List<Reserva> filterBySalida(
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime fin) {
        return repository.findByFechaSalidaBefore(fin);
    }

    @GetMapping("/filtro/estado")
    public List<Reserva> filterByEstado(@RequestParam Reserva.Estado estado) {
        return repository.findByEstado(estado);
    }

    @GetMapping("/filtro/motivo-entrada")
    public List<Reserva> filterByMotivoEntrada(@RequestParam String descripcion) {
        return repository.findByMotivoEntradaDescripcion(descripcion);
    }

    @GetMapping("/filtro/motivo-salida")
    public List<Reserva> filterByMotivoSalida(@RequestParam String descripcion) {
        return repository.findByMotivoSalidaDescripcion(descripcion);
    }
}
