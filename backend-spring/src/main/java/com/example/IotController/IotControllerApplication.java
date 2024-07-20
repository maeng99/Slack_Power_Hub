package com.example.IotController;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class IotControllerApplication {

	public static void main(String[] args) {
		SpringApplication.run(IotControllerApplication.class, args);
	}
}
