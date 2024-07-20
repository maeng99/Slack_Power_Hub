package com.example.IotController.domain.Metric.service;

import com.example.IotController.domain.Energy.dto.EnergyResponse;
import com.example.IotController.domain.Metric.model.Metric;
import com.example.IotController.domain.Metric.reposiotry.MetricRepository;
import com.example.IotController.domain.Plugs.model.Plugs;
import com.example.IotController.domain.Plugs.service.PlugService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
@Transactional
public class MetricService {

    private final MetricRepository metricRepository;
    private final PlugService plugService;

    public void save(Plugs plug, Double amount) {
        Metric metric = Metric.builder().plug(plug).amount(amount).build();
        metricRepository.save(metric);
    }

    @Scheduled(fixedRate = 300000)
    public void metric() throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        String serverlessUrl = "https://v3fx8sky03.execute-api.ap-northeast-2.amazonaws.com/newstead/getPowerUsage";

        HttpEntity<Long> entity = new HttpEntity<>(1L);

        ResponseEntity<String> response = restTemplate.exchange(serverlessUrl, HttpMethod.GET, entity, String.class);

        String responseBody = response.getBody();

        ObjectMapper objectMapper = new ObjectMapper();
        EnergyResponse energyResponse = objectMapper.readValue(responseBody, EnergyResponse.class);

        Long responseId = energyResponse.getId();
        String responseStatus = energyResponse.getStatus();
        Double powerUsage = energyResponse.getPowerUsage();

        Plugs plug = plugService.findById(responseId);

        save(plug, powerUsage);
    }
}
