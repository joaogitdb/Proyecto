package com.empresa.inetum.gestor_reservas.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity
@Table(name = "Motivo")
public class Motivo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "motivo_id")
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(name = "tipo", nullable = false)
    private Tipo tipo;

    @Column(name = "descripcion", nullable = false, length = 200)
    private String descripcion;

    @Column(name = "fecha_creacion", updatable = false)
    private LocalDateTime fechaCreacion;

    public enum Tipo { ENTRADA, SALIDA }

    @OneToMany(mappedBy = "motivoEntrada")
    private Set<Reserva> reservasEntrada;

    @OneToMany(mappedBy = "motivoSalida")
    private Set<Reserva> reservasSalida;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Tipo getTipo() {
		return tipo;
	}

	public void setTipo(Tipo tipo) {
		this.tipo = tipo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

	public LocalDateTime getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(LocalDateTime fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Set<Reserva> getReservasEntrada() {
		return reservasEntrada;
	}

	public void setReservasEntrada(Set<Reserva> reservasEntrada) {
		this.reservasEntrada = reservasEntrada;
	}

	public Set<Reserva> getReservasSalida() {
		return reservasSalida;
	}

	public void setReservasSalida(Set<Reserva> reservasSalida) {
		this.reservasSalida = reservasSalida;
	}

    
}
