package com.example.IotController.domain.Energy.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class EnergyResponse {
    private Long id;
    private String status;

    @JsonProperty("power_usage")
    private Double powerUsage;
}
