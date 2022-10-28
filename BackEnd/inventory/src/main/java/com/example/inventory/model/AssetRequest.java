package com.example.inventory.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AssetRequest {

private int assetId;

private Boolean isAssigned;

private String assetModel;

private String assetType;

private int categoryId;

private String assignedUserId;

private int assetDeptId;

private Boolean availabilitytatus;

private Date assignedDate;

private Date assetDueDate;

private String createdBy;

private Date createdDate;

private String updatedDy;

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

public Boolean isAvailabilitytatus() {
	return availabilitytatus;
}



public void setAvailabilitytatus(Boolean availabilitytatus) {
	this.availabilitytatus = availabilitytatus;
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
