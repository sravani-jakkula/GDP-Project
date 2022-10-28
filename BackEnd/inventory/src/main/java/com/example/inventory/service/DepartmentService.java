package com.example.inventory.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.inventory.dao.DepartmentDao;
import com.example.inventory.entities.Department;
import com.example.inventory.entities.User;

@Service
public class DepartmentService {
	@Autowired
	private DepartmentDao departmentDao;
	public Department saveDepartment(Department department) {
		
		return departmentDao.save(department);
	}
	
}
