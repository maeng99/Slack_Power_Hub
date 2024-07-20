package com.example.IotController.domain.User.model;

import com.example.IotController.domain.Plugs.model.Plugs;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import static jakarta.persistence.CascadeType.ALL;
import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Getter
@NoArgsConstructor
public class Users {

    @Id @GeneratedValue(strategy = IDENTITY)
    private Long id;

    private String name;

    private String slackUserId;

    @OneToMany(mappedBy = "user", cascade = ALL)
    private List<Plugs> plugs = new ArrayList<>();
}
