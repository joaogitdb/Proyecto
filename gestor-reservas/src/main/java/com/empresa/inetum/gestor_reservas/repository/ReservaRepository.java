package com.empresa.inetum.gestor_reservas.repository;

import com.empresa.inetum.gestor_reservas.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDateTime;
import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    List<Reserva> findByFechaEntradaAfter(LocalDateTime inicio);
    List<Reserva> findByFechaSalidaBefore(LocalDateTime fin);
    List<Reserva> findByEstado(Reserva.Estado estado);
    List<Reserva> findByMotivoEntradaDescripcion(String descripcion);
    List<Reserva> findByMotivoSalidaDescripcion(String descripcion);
}