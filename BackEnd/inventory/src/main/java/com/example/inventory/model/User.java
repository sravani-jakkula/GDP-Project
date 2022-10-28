package com.example.inventory.model;



public class User {

private String userId;

private String password;

private String userFname;

private String userLname;

private boolean isFaculty;

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
