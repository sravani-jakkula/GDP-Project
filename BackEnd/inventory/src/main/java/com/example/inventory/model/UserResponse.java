package com.example.inventory.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

public class UserResponse {
@JsonIgnore	
private boolean isLoggedIn;
@JsonIgnore
private String userId;
private boolean isFaculty;
private boolean isRegistered;
public boolean isLoggedIn() {
	return isLoggedIn;
}
public void setLoggedIn(boolean isLoggedIn) {
	this.isLoggedIn = isLoggedIn;
}
public String getUserId() {
	return userId;
}
public void setUserId(String userId) {
	this.userId = userId;
}
public boolean isFaculty() {
	return isFaculty;
}
public void setFaculty(boolean isFaculty) {
	this.isFaculty = isFaculty;
}
public boolean isRegistered() {
	return isRegistered;
}
public void setRegistered(boolean isRegistered) {
	this.isRegistered = isRegistered;
}

}
