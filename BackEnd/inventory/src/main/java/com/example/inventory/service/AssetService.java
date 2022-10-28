package com.example.inventory.service;

import java.util.Date;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.inventory.dao.AdminDao;
import com.example.inventory.dao.AssetDao;
import com.example.inventory.entities.Admin;
import com.example.inventory.entities.Asset;
import com.example.inventory.entities.User;
import com.example.inventory.model.AssetRequest;
import com.example.inventory.model.AssetResponse;

@Service
public class AssetService {
	@Autowired
	private AssetDao assetDao;

	public AssetResponse save(AssetRequest assetRequest) {
		Asset asset = new Asset();
		asset.setAssetDeptId(assetRequest.getAssetDeptId());
		asset.setAssetDueDate(assetRequest.getAssetDueDate());
		asset.setAssetModel(assetRequest.getAssetModel());
		asset.setAssetType(assetRequest.getAssetType());
		asset.setAssigned(assetRequest.isAssigned());
		asset.setAssignedDate(new Date());
		asset.setAssignedUserId(assetRequest.getAssignedUserId());
		asset.setAvailabilitytatus(assetRequest.isAvailabilitytatus());
		asset.setCategoryId(assetRequest.getCategoryId());
		asset.setCreatedBy("Admin");
		asset.setCreatedDate(new Date());
		asset.setUpdatedDy("Admin");
		asset.setUpdatedDate(new Date());
		asset.setAssetDeptId(assetRequest.getAssetDeptId());
		asset.setAssetDueDate(new Date());
		
		
		assetDao.save(asset);
		
		AssetResponse assetResp = new AssetResponse();
		assetResp.setAssetCreated(true);
		assetResp.setAssetId(asset.getAssetId());
		
		return assetResp;
	}

	public AssetResponse getAvailableAssetsByType(AssetRequest assetRequest) {
		AssetResponse assetResponse = new AssetResponse();
		List<Asset> assetList = assetDao.findByAssetTypeAndAvailabilityStatus(assetRequest.getAssetType(), Boolean.TRUE);
		assetResponse.setAssetList(assetList);
		assetResponse.setAvailablecount(String.valueOf(assetList.size()));
		return assetResponse;
	}

	public AssetResponse updateAssetAssigned(AssetRequest assetRequest) {
		AssetResponse assetResponse = new AssetResponse();
		Asset asset = assetDao.findByAssetId(assetRequest.getAssetId());
		asset.setAvailabilitytatus(assetRequest.isAvailabilitytatus());
		asset.setAssigned(assetRequest.isAssigned());
		asset.setAssignedDate(new Date());
		assetDao.save(asset);
		assetResponse.setAssetId(assetRequest.getAssetId());
		assetResponse.setAssetUpdated(true);
		return assetResponse;
	}

	

}
