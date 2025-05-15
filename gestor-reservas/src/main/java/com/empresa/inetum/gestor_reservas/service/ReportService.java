package com.empresa.inetum.gestor_reservas.service;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class ReportService {
    private final JdbcTemplate jdbc;

    public ReportService(JdbcTemplate jdbc) {
        this.jdbc = jdbc;
    }

    public int countAltas() {
        return jdbc.queryForObject(
            "SELECT COUNT(*) FROM Reserva WHERE DATE(fecha_entrada)=CURDATE() AND estado='ACTIVA'", Integer.class);
    }

    public int countBajas() {
        return jdbc.queryForObject(
            "SELECT COUNT(*) FROM Reserva WHERE DATE(fecha_salida)=CURDATE() AND estado='COMPLETADA'", Integer.class);
    }

    public int ocupacionMedia() {
        int ocupadas = jdbc.queryForObject(
            "SELECT COUNT(*) FROM Reserva WHERE estado='ACTIVA'", Integer.class);
        int capacidad = jdbc.queryForObject(
            "SELECT SUM(capacidad) FROM Establecimiento", Integer.class);
        return capacidad > 0 ? (ocupadas * 100 / capacidad) : 0;
    }

    public int habitacionesLibres() {
        int ocupadas = jdbc.queryForObject(
            "SELECT COUNT(*) FROM Reserva WHERE estado='ACTIVA'", Integer.class);
        int capacidad = jdbc.queryForObject(
            "SELECT SUM(capacidad) FROM Establecimiento", Integer.class);
        return capacidad > 0 ? (capacidad - ocupadas) : 0;
    }

    public int countMedicos() {
        return jdbc.queryForObject(
            "SELECT COUNT(*) FROM Medico", Integer.class);
    }
}