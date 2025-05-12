package com.empresa.inetum.gestor_reservas.repository;

import com.empresa.inetum.gestor_reservas.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstablecimientoRepository extends JpaRepository<Establecimiento, Long> {
}
