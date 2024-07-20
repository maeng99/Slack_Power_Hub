package com.example.IotController.domain.Plugs.service;

import com.example.IotController.domain.Plugs.dto.AddPlugDto;
import com.example.IotController.domain.Plugs.model.Plugs;
import com.example.IotController.domain.Plugs.repository.PlugRepository;
import com.example.IotController.domain.User.model.Users;
import com.example.IotController.domain.User.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class PlugService {

    private final PlugRepository plugRepository;
    private final UserService userService;

    @Transactional
    public void savePlug(AddPlugDto addPlugDto) {

        Users user = userService.findUser(addPlugDto.getUserId());

        Plugs plug = Plugs.builder()
                .name(addPlugDto.getName())
                .user(user)
                .time(addPlugDto.getTime()).build();

        plugRepository.save(plug);
    }

    public List<Plugs> findByMode() {
        return plugRepository.findByModeTrue();
    }

    public List<Plugs> findByModeIsFalse() {
        return plugRepository.findByModeFalse();
    }

    public Plugs findById(Long id) {
        return plugRepository.findById(id).orElseThrow();
    }
}
