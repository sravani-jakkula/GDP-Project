package com.example.inventory.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.inventory.entities.User;

public interface UserDao extends JpaRepository<User, String> {

	User findByUserId(String user_id);

	
	//	@Query
//public static User findByUsernamePassword(String username, String password) {
//		// TODO Auto-generated method stub
//		return null;
//	}

//	public User findByUserId(String user_id);


}
