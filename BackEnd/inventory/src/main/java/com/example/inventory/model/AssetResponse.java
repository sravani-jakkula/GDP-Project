package com.example.inventory.model;

import java.util.List;

import com.example.inventory.entities.Asset;
import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class AssetResponse {
private boolean assetCreated;
private int assetId;
private String assetType;
private String availablecount;
private List<Asset> assetList;
private boolean isAssetUpdated;
 

public boolean isAssetCreated() {
	return assetCreated;
}
public void setAssetCreated(boolean assetCreated) {
	this.assetCreated = assetCreated;
}
public int getAssetId() {
	return assetId;
}
public void setAssetId(int assetId) {
	this.assetId = assetId;
}
public String getAssetType() {
	return assetType;
}
public void setAssetType(String assetType) {
	this.assetType = assetType;
}
public String getAvailablecount() {
	return availablecount;
}
public void setAvailablecount(String availablecount) {
	this.availablecount = availablecount;
}
public List<Asset> getAssetList() {
	return assetList;
}
public void setAssetList(List<Asset> assetList) {
	this.assetList = assetList;
}
public boolean isAssetUpdated() {
	return isAssetUpdated;
}
public void setAssetUpdated(boolean isAssetUpdated) {
	this.isAssetUpdated = isAssetUpdated;
}

}
