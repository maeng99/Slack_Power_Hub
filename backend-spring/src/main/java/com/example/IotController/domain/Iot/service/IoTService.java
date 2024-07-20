package com.example.IotController.domain.Iot.service;

import com.example.IotController.domain.Plugs.model.Plugs;
import com.example.IotController.domain.Plugs.service.PlugService;
import com.example.IotController.domain.Energy.dto.AutoOffRequest;
import com.example.IotController.domain.Energy.dto.EnergyResponse;
import com.example.IotController.domain.Energy.model.Energy;
import com.example.IotController.domain.Energy.service.EnergyService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class IoTService {

    private final PlugService plugService;
    private final EnergyService energyService;

    @Transactional
    public void autoOff(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        String serverlessUrl = "https://v3fx8sky03.execute-api.ap-northeast-2.amazonaws.com/newstead/postDevice";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        AutoOffRequest autoOffRequest = new AutoOffRequest("off", id);
        HttpEntity<AutoOffRequest> entity = new HttpEntity<>(autoOffRequest, headers);

        restTemplate.postForEntity(serverlessUrl, entity, Void.class);
    }

    @Transactional
    @Scheduled(fixedRate = 300000)
    public void getIoTState() throws JsonProcessingException {

        List<Plugs> plugs = plugService.findByMode();

        List<Long> plugsId = plugs.stream().map(p -> p.getId()).collect(Collectors.toList());

        for (Long id : plugsId) {

            RestTemplate restTemplate = new RestTemplate();
            String serverlessUrl = "https://v3fx8sky03.execute-api.ap-northeast-2.amazonaws.com/newstead/getPowerUsage";

            HttpEntity<Long> entity = new HttpEntity<>(id);

            ResponseEntity<String> response = restTemplate.exchange(serverlessUrl, HttpMethod.GET, entity, String.class);

            String responseBody = response.getBody();

            ObjectMapper objectMapper = new ObjectMapper();
            EnergyResponse energyResponse = objectMapper.readValue(responseBody, EnergyResponse.class);

            Long responseId = energyResponse.getId();
            String responseStatus = energyResponse.getStatus();
            Double powerUsage = energyResponse.getPowerUsage();

            if (responseStatus == "off") {
                continue;
            }

            if (powerUsage != 0) {
                energyService.deleteFalse(responseId);
                continue;
            }

            Boolean existsPlug = energyService.existsByPlugId(responseId);
            Plugs plug = plugService.findById(responseId);

            if (!existsPlug) {
                energyService.save(plug, powerUsage);
                continue;
            }

            Energy energy = energyService.findById(responseId);

            if (existsPlug) {
                energy.plusStack(energy);
            }

            if (energy.getStack() / 12 >= plug.getTime()) {
                autoOff(plug.getId());
                plug.updateStatus();
            }
        }

        List<Plugs> falsePlugs = plugService.findByModeIsFalse();

        List<Long> falseIds = falsePlugs.stream().map(p -> p.getId()).collect(Collectors.toList());

        for (Long id : falseIds) {
            energyService.deleteFalse(id);
        }
    }
}
