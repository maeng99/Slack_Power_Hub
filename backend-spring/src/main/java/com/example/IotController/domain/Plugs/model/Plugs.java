package com.example.IotController.domain.Plugs.model;

import com.example.IotController.domain.Energy.model.Energy;
import com.example.IotController.domain.Metric.model.Metric;
import com.example.IotController.domain.User.model.Users;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor
public class Plugs {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String name;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private Users user;

    private String status; // 지금 장치가 사용중인지 아닌지

    private Boolean mode; // 자동 제어 모드

    private Long time; // 자동 제어 기준 시간

    @OneToMany(mappedBy = "energy", cascade = ALL)
    private List<Energy> energy = new ArrayList<>();

    @OneToMany(mappedBy = "plug", cascade = ALL)
    private List<Metric> metrics = new ArrayList<>();

    @Builder
    public Plugs(String name, Users user, Long time) {
        this.name = name;
        this.user = user;
        this.status = "off";
        this.mode = false;
        this.time = time;
    }

    public void updateStatus () {
        this.status = "on";
    }
}
