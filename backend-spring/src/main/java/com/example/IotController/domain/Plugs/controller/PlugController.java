package com.example.IotController.domain.Plugs.controller;

import com.example.IotController.domain.Plugs.dto.AddPlugDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plug")
public class PlugController {

    @PostMapping("")
    public void addPlug(@RequestBody AddPlugDto addPlugDto) {

    }
}
