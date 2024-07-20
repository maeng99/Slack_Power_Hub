package com.example.IotController.domain.Iot.controller;

import com.example.IotController.domain.Iot.service.IoTService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/IoT")
public class IoTController {

    private final IoTService ioTService;

    /*@PostMapping("/autoOff/{id}")
    public void autoOff(@PathVariable Long id) {
        ioTService.autoOff(id);
    }*/
}
