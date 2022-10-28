package com.example.inventory.model;

import lombok.Data;

public class AdminResponse {
private boolean isLoggedIn;
private String userId;
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




}
