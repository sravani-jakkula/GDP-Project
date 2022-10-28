package com.example.inventory.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.inventory.dao.AdminDao;
import com.example.inventory.entities.Admin;
import com.example.inventory.entities.User;
@Service
public class AdminService {
	@Autowired
	private AdminDao admindao;

	public Admin findById(String admin_id) {
		// TODO Auto-generated method stub
		return admindao.findByUserId(admin_id);
	}

	

}
