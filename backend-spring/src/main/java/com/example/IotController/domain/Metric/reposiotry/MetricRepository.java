package com.example.IotController.domain.Metric.reposiotry;

import com.example.IotController.domain.Metric.model.Metric;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MetricRepository extends JpaRepository<Metric, Long> {
}
