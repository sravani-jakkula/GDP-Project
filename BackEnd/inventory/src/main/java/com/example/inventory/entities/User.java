package com.example.inventory.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "user")
public class User {
@Id
@Column(name = "user_id")
private String userId;

@Column(name = "password")
private String password;

@Column(name = "user_fname")
private String userFname;

@Column(name = "user_lname")
private String userLname;

@Column(name = "isFaculty")
private boolean isFaculty;

@Column(name = "dept_id")
private String deptId;

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

public String getUserFname() {
	return userFname;
}

public void setUserFname(String userFname) {
	this.userFname = userFname;
}

public String getUserLname() {
	return userLname;
}

public void setUserLname(String userLname) {
	this.userLname = userLname;
}

public boolean isFaculty() {
	return isFaculty;
}

public void setFaculty(boolean isFaculty) {
	this.isFaculty = isFaculty;
}

public String getDeptId() {
	return deptId;
}

public void setDeptId(String deptId) {
	this.deptId = deptId;
}

}
