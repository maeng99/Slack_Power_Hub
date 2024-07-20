package com.example.IotController.domain.Energy.repository;

import com.example.IotController.domain.Energy.model.Energy;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnergyRepository extends JpaRepository<Energy, Long> {
    void deleteAllByPlugId(Long plugId);
    Boolean existsByPlugId(Long plugId);
}
