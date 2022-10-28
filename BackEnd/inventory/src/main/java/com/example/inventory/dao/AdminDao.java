package com.example.inventory.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;

import com.example.inventory.entities.Admin;
import com.example.inventory.entities.User;

public interface AdminDao extends JpaRepository<Admin, String>{

	public Admin findByUserId(String admin_id);

}
