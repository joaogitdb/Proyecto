package com.empresa.inetum.gestor_reservas.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "Reserva")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "reserva_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "paciente_id", nullable = false)
    private Paciente paciente;

    @ManyToOne
    @JoinColumn(name = "establecimiento_id", nullable = false)
    private Establecimiento establecimiento;

    @ManyToOne
    @JoinColumn(name = "habitacion_id")
    private Habitacion habitacion;

    @ManyToOne
    @JoinColumn(name = "medico_id")
    private Medico medico;

    @ManyToOne
    @JoinColumn(name = "motivo_entrada_id", nullable = false)
    private Motivo motivoEntrada;

    @ManyToOne
    @JoinColumn(name = "motivo_salida_id")
    private Motivo motivoSalida;

    @Column(name = "fecha_entrada", nullable = false)
    private LocalDateTime fechaEntrada;

    @Column(name = "fecha_salida", nullable = false)
    private LocalDateTime fechaSalida;

    @Enumerated(EnumType.STRING)
    @Column(name = "estado", nullable = false)
    private Estado estado;

    @Column(name = "fecha_creacion", updatable = false)
    private LocalDateTime fechaCreacion;

    @Column(name = "fecha_actualizacion")
    private LocalDateTime fechaActualizacion;

    public enum Estado { ACTIVA, CANCELADA, COMPLETADA }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Paciente getPaciente() {
		return paciente;
	}

	public void setPaciente(Paciente paciente) {
		this.paciente = paciente;
	}

	public Establecimiento getEstablecimiento() {
		return establecimiento;
	}

	public void setEstablecimiento(Establecimiento establecimiento) {
		this.establecimiento = establecimiento;
	}

	public Habitacion getHabitacion() {
		return habitacion;
	}

	public void setHabitacion(Habitacion habitacion) {
		this.habitacion = habitacion;
	}

	public Medico getMedico() {
		return medico;
	}

	public void setMedico(Medico medico) {
		this.medico = medico;
	}

	public Motivo getMotivoEntrada() {
		return motivoEntrada;
	}

	public void setMotivoEntrada(Motivo motivoEntrada) {
		this.motivoEntrada = motivoEntrada;
	}

	public Motivo getMotivoSalida() {
		return motivoSalida;
	}

	public void setMotivoSalida(Motivo motivoSalida) {
		this.motivoSalida = motivoSalida;
	}

	public LocalDateTime getFechaEntrada() {
		return fechaEntrada;
	}

	public void setFechaEntrada(LocalDateTime fechaEntrada) {
		this.fechaEntrada = fechaEntrada;
	}

	public LocalDateTime getFechaSalida() {
		return fechaSalida;
	}

	public void setFechaSalida(LocalDateTime fechaSalida) {
		this.fechaSalida = fechaSalida;
	}

	public Estado getEstado() {
		return estado;
	}

	public void setEstado(Estado estado) {
		this.estado = estado;
	}

	public LocalDateTime getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDateTime fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public LocalDateTime getFechaActualizacion() {
		return fechaActualizacion;
	}

	public void setFechaActualizacion(LocalDateTime fechaActualizacion) {
		this.fechaActualizacion = fechaActualizacion;
	}

    
}
