package com.example.inventory.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.inventory.entities.Department;
import com.example.inventory.service.DepartmentService;
@RestController
@RequestMapping("/Department")
@CrossOrigin
public class DepartmentController {
	@Autowired
	private DepartmentService departmentService;
	@PostMapping(value="/newDepartment",consumes = "application/json",produces="application/json")
	public com.example.inventory.entities.Department addDepartment(@RequestBody Department department) {
		com.example.inventory.entities.Department departmentEntity = new com.example.inventory.entities.Department();
		departmentEntity.setDeptId(departmentEntity.getDeptId());
		departmentEntity.setDeptName(departmentEntity.getDeptName());
		
		com.example.inventory.entities.Department savedDepartmentEntity =departmentService.saveDepartment(departmentEntity);
	
	return savedDepartmentEntity;
		
	}

}
