package com.empresa.inetum.gestor_reservas.repository;

import com.empresa.inetum.gestor_reservas.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HabitacionRepository extends JpaRepository<Habitacion, Long> {
    List<Habitacion> findByEstablecimientoId(Long establecimientoId);
}