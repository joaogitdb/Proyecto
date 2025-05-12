package com.empresa.inetum.gestor_reservas.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "Estadisticas")
public class Estadisticas {

    @Id
    @Column(name = "fecha")
    private LocalDate fecha;

    @Column(name = "altas", nullable = false)
    private Integer altas;

    @Column(name = "bajas", nullable = false)
    private Integer bajas;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

	public LocalDate getFecha() {
		return fecha;
	}

	public void setFecha(LocalDate fecha) {
		this.fecha = fecha;
	}

	public Integer getAltas() {
		return altas;
	}

	public void setAltas(Integer altas) {
		this.altas = altas;
	}

	public Integer getBajas() {
		return bajas;
	}

	public void setBajas(Integer bajas) {
		this.bajas = bajas;
	}

	public LocalDateTime getFechaActualizacion() {
		return fechaActualizacion;
	}

	public void setFechaActualizacion(LocalDateTime fechaActualizacion) {
		this.fechaActualizacion = fechaActualizacion;
	}

    
}
