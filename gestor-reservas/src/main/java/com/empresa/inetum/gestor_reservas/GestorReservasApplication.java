package com.empresa.inetum.gestor_reservas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class GestorReservasApplication {

	public static void main(String[] args) {
		SpringApplication.run(GestorReservasApplication.class, args);
	}

}
