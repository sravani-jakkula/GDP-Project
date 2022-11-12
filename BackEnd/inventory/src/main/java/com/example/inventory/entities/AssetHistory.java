package com.example.inventory.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "asset_history")
public class AssetHistory {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "id")
private int id;

@Column(name = "asset_id")
private int assetId;

@Column(name = "user_id")
private String userId;

@Column(name = "assigned_date")
private Date assignedDate;

@Column(name = "returned_date")
private Date returnedDate;

public int getAssetId() {
	return assetId;
}

public void setAssetId(int assetId) {
	this.assetId = assetId;
}

public String getUserId() {
	return userId;
}

public void setUserId(String userId) {
	this.userId = userId;
}

public Date getAssignedDate() {
	return assignedDate;
}

public void setAssignedDate(Date assignedDate) {
	this.assignedDate = assignedDate;
}

public Date getReturnedDate() {
	return returnedDate;
}

public void setReturnedDate(Date returnedDate) {
	this.returnedDate = returnedDate;
}

}
