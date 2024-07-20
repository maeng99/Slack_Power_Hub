package com.example.IotController.domain.Energy.model;

import com.example.IotController.domain.Plugs.model.Plugs;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor
public class Energy {

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @ManyToOne()
    @JoinColumn(name = "plug_id")
    private Plugs plug;

    private Double energy;

    private Long stack;

    @Builder
    public Energy(Plugs plug, Double energy) {
        this.plug = plug;
        this.energy = energy;
        this.stack = 0L;
    }

    public void plusStack(Energy energy) {
        stack = stack + 1;
    }
}
