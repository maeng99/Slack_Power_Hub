package com.example.IotController.domain.Metric.model;

import com.example.IotController.domain.Plugs.model.Plugs;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor
public class Metric {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "plug_id")
    private Plugs plug;

    private Double amount;

    @Builder
    public Metric(Plugs plug, Double amount) {
        this.plug = plug;
        this.amount = amount;
    }
}
