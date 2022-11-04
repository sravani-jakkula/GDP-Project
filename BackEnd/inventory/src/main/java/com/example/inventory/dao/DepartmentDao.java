package com.example.inventory.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.inventory.entities.Department;

public interface DepartmentDao extends JpaRepository<Department, String>{

}
