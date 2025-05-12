package com.empresa.inetum.gestor_reservas.repository;

import com.empresa.inetum.gestor_reservas.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicoRepository extends JpaRepository<Medico, Long> {
    Medico findByDocumentoIdentidad(String documentoIdentidad);
}
