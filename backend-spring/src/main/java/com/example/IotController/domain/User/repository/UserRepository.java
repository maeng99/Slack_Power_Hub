package com.example.IotController.domain.User.repository;

import com.example.IotController.domain.User.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
}
