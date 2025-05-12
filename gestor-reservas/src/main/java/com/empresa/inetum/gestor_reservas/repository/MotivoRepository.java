package com.empresa.inetum.gestor_reservas.repository;

import com.empresa.inetum.gestor_reservas.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface MotivoRepository extends JpaRepository<Motivo, Integer> {
    List<Motivo> findByTipo(Motivo.Tipo tipo);
}
