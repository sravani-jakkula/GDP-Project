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
@Table(name = "asset")
public class Asset {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "asset_id")
private int assetId;

@Column(name = "is_assigned")
private Boolean isAssigned;

@Column(name = "asset_model")
private String assetModel;

@Column(name = "asset_type")
private String assetType;

@Column(name = "category_id")
private int categoryId;

@Column(name = "user_id")
private String assignedUserId;

@Column(name = "dep_id")
private int assetDeptId;

@Column(name = "availability_status")
private Boolean availabilityStatus;

@Column(name = "assigned_date")
private Date assignedDate;

@Column(name = "asset_due_date")
private Date assetDueDate;

@Column(name = "created_by")
private String createdBy;

@Column(name = "created_date")
private Date createdDate;

@Column(name = "updated_by")
private String updatedDy;

@Column(name = "updated_date")
private Date updatedDate;

public int getAssetId() {
	return assetId;
}

public void setAssetId(int assetId) {
	this.assetId = assetId;
}

public Boolean isAssigned() {
	return isAssigned;
}

public void setAssigned(Boolean isAssigned) {
	this.isAssigned = isAssigned;
}

public String getAssetModel() {
	return assetModel;
}

public void setAssetModel(String assetModel) {
	this.assetModel = assetModel;
}

public String getAssetType() {
	return assetType;
}

public void setAssetType(String assetType) {
	this.assetType = assetType;
}

public int getCategoryId() {
	return categoryId;
}

public void setCategoryId(int categoryId) {
	this.categoryId = categoryId;
}

public String getAssignedUserId() {
	return assignedUserId;
}

public void setAssignedUserId(String assignedUserId) {
	this.assignedUserId = assignedUserId;
}

public int getAssetDeptId() {
	return assetDeptId;
}

public void setAssetDeptId(int assetDeptId) {
	this.assetDeptId = assetDeptId;
}

public boolean isAvailabilitytatus() {
	return availabilityStatus;
}

public void setAvailabilitytatus(Boolean availabilitytatus) {
	this.availabilityStatus = availabilitytatus;
}

public Date getAssignedDate() {
	return assignedDate;
}

public void setAssignedDate(Date assignedDate) {
	this.assignedDate = assignedDate;
}

public Date getAssetDueDate() {
	return assetDueDate;
}

public void setAssetDueDate(Date assetDueDate) {
	this.assetDueDate = assetDueDate;
}

public String getCreatedBy() {
	return createdBy;
}

public void setCreatedBy(String createdBy) {
	this.createdBy = createdBy;
}

public Date getCreatedDate() {
	return createdDate;
}

public void setCreatedDate(Date createdDate) {
	this.createdDate = createdDate;
}

public String getUpdatedDy() {
	return updatedDy;
}

public void setUpdatedDy(String updatedDy) {
	this.updatedDy = updatedDy;
}

public Date getUpdatedDate() {
	return updatedDate;
}

public void setUpdatedDate(Date updatedDate) {
	this.updatedDate = updatedDate;
}


}
