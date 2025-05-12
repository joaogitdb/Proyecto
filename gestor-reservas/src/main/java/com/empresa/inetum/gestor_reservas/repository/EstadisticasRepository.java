package com.empresa.inetum.gestor_reservas.repository;

import com.empresa.inetum.gestor_reservas.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;

public interface EstadisticasRepository extends JpaRepository<Estadisticas, LocalDate> {
}
