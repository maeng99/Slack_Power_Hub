package com.example.IotController.domain.Energy.service;

import com.example.IotController.domain.Plugs.model.Plugs;
import com.example.IotController.domain.Energy.model.Energy;
import com.example.IotController.domain.Energy.repository.EnergyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class EnergyService {

    private final EnergyRepository energyRepository;

    public void save(Plugs plug, Double energy) {

        Energy saveEnergy = Energy.builder().plug(plug).energy(energy).build();

        energyRepository.save(saveEnergy);
    }

    public void deleteFalse(Long id) {
        energyRepository.deleteAllByPlugId(id);
    }

    public Boolean existsByPlugId(Long id) {
        return energyRepository.existsByPlugId(id);
    }

    public Energy findById(Long id) {
        return energyRepository.findById(id).orElseThrow();
    }
}
