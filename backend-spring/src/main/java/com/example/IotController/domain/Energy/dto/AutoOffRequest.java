package com.example.IotController.domain.Energy.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AutoOffRequest {

    private String status;
    private Long id;
}
