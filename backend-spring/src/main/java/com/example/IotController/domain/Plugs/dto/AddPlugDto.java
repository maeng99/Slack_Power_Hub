package com.example.IotController.domain.Plugs.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddPlugDto {

    private String name;
    private Long userId;
    private Long time;
}