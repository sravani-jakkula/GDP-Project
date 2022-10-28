package com.example.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.inventory.entities.User;
import com.example.inventory.model.Admin;
import com.example.inventory.model.AdminResponse;
import com.example.inventory.service.AdminService;

@RestController
@RequestMapping("/Admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private AdminService adminService;

	@PostMapping("/adminLogin")
	public AdminResponse getAdmin(@RequestBody Admin admin) {
		com.example.inventory.entities.Admin adminobj = adminService.findById(admin.getUserId());
		AdminResponse resp = new AdminResponse();
		if (adminobj != null && (adminobj.getUserId().equalsIgnoreCase(admin.getUserId())
				&& adminobj.getPassword().equalsIgnoreCase(admin.getPassword()))) {
			resp.setLoggedIn(true);
			resp.setUserId(admin.getUserId());
			return resp;
		} else {
			resp.setLoggedIn(false);
			resp.setUserId(admin.getUserId());
			return resp;
		}
	}
}
