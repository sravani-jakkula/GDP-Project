package com.example.inventory.service;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.inventory.entities.User;
import com.example.inventory.dao.UserDao;

@Service
public class UserService {
	@Autowired
	private UserDao userdao;
	private List<User> users;
public User saveUser(User user) {
	
	return userdao.save(user);
}
public List<User> getAllUsers() {
	return userdao.findAll();
}
public User findByUserId(String user_id) {
	
	return userdao.findByUserId(user_id);
}
public boolean  getPassword(String password) {
	
	return userdao.equals(password);
}
//public User fetchUserByUserId(String  user_id) {
//	return userdao.findByUserId(user_id);
//}
//public User getUserById(String user_id) {
//	User user=null;
//	for(User u:users) {
//		if(u.getUser_id()==user_id)
//			user=u;
//		break;
//	}
//	return user;
//}
//public String login_user(@RequestParam("username") String username,@RequestParam("password") String password,
//		HttpSession session,ModelMap modelMap)
//{
//	
//User auser;
//try {
//	auser = UserDao.findByUsernamePassword(username, password);
//} catch (Exception e) {
//	// TODO Auto-generated catch block
//	e.printStackTrace();
//}
//
//if(auser!=null)
//{
//	String uname=auser.getUser_id();
//	String upass=auser.getPassword();
//
//	if(username.equalsIgnoreCase(uname) && password.equalsIgnoreCase(upass)) 
//	{
//		session.setAttribute("username",username);
//		return "dummy";
//	}
//	else 
//	{
//		modelMap.put("error", "Invalid Account");
//		return "login";
//	}
//}
//else
//{
//	modelMap.put("error", "Invalid Account");
//	return "login";
//}
//
//}
}