package com.example.inventory.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.inventory.dao.UserDao;
import com.example.inventory.model.User;
import com.example.inventory.model.UserResponse;
import com.example.inventory.service.UserService;

@RestController
@RequestMapping("/User")
@CrossOrigin
public class UserController {
	@Autowired
	private UserService service;
	// Method to put values and setting is_faculty flag
	@PostMapping(value="/newuser",consumes="application/json", produces ="application/json")
	public UserResponse newUser(@RequestBody User user) {
		UserResponse userResponse = new UserResponse();
		
		if(user.getUserId().startsWith("s")||user.getUserId().startsWith("S")){
			userResponse.setFaculty(false);
			userResponse.setRegistered(true);
		} else if(user.getUserId().startsWith("f")||user.getUserId().startsWith("F")){
			userResponse.setFaculty(true);
			userResponse.setRegistered(true);
		} else {
			userResponse.setRegistered(false);
		}
		
		com.example.inventory.entities.User userEntity = new com.example.inventory.entities.User();
		userEntity.setUserId(user.getUserId());
		userEntity.setPassword(user.getPassword());
		userEntity.setDeptId(user.getDeptId());
		userEntity.setFaculty(user.isFaculty());
		userEntity.setUserFname(user.getUserFname());
		userEntity.setUserLname(user.getUserLname());
		
		com.example.inventory.entities.User savedUserEntity =service.saveUser(userEntity);
	
	return userResponse;
}
	@PostMapping(value="/existingUser" , consumes = "application/json", produces="application/json")
	public UserResponse exitUser(@RequestBody User user) {
		UserResponse userResponse = new UserResponse();
		com.example.inventory.entities.User userobj = service.findByUserId(user.getUserId());
		
		if(userobj != null && 
				user.getUserId().equals(userobj.getUserId()) && user.getPassword().equals(userobj.getPassword())) {
			userResponse.setLoggedIn(true);
			userResponse.setUserId(user.getUserId());
		} else {
			userResponse.setLoggedIn(false);
			userResponse.setUserId(user.getUserId());
		}
		
		return userResponse;
	}
	
	
//	getting user id
//	@GetMapping("/newuserValue")
//	@ResponseBody
//	public User getNewUser(@RequestParam User user) {
//		User userobj=null;
//		userobj=service.fetchUserByUserId(user.getUser_id());
//		return userobj;
//	}
	// Method to fetch all users
//	@GetMapping("/userValue")
//	public List<User> getAllUsers(){
//		return service.getAllUsers();
//	}
//	@PostMapping("/getNewUser/{user_id}")
//	public User getUserById(@RequestParam String user_id,@RequestParam String password) {
//		if(user_id.equals(user_id)) {
//			return servic
//		}
//		return service.getUserById(user_id);
//	}
//	@GetMapping("/loginUser/{user_id}/{password}")
//	public User loginUser(@PathVariable String user_id,@PathVariable String password) {
//		  return user_id=
//	}
//	public User loginUser(@RequestBody User user) {
//		
//		String user_id = user.getUser_id();
//        User userobj = service.getUser(user.getUser_id(),user.getPassword());
//        return null;
////	}
//	@PostMapping("/login")
//	public String login_user(@RequestParam("username") String username,@RequestParam("password") String password,
//			HttpSession session,ModelMap modelMap)
//	{
//		return service.login_user(username, password, session, modelMap);
//	}
}
