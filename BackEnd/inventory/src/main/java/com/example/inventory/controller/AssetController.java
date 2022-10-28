package com.example.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.inventory.entities.User;
import com.example.inventory.model.Admin;
import com.example.inventory.model.AdminResponse;
import com.example.inventory.model.AssetRequest;
import com.example.inventory.model.AssetResponse;
import com.example.inventory.service.AdminService;
import com.example.inventory.service.AssetService;

@RestController
@RequestMapping("/Asset")
@CrossOrigin
public class AssetController {
	@Autowired
	private AssetService assetService;

	@PostMapping("/createAsset")
	public AssetResponse createAsset(@RequestBody AssetRequest assetRequest) {
		
		return assetService.save(assetRequest);
		
	}
	
	@PostMapping("/getAvailableAssetsByType")
	public AssetResponse getAvailableAssetsByType(@RequestBody AssetRequest assetRequest) {
		return assetService.getAvailableAssetsByType(assetRequest);
	}
	
	@PostMapping("/updateAssetAssigned")
	public AssetResponse updateAssetAssigned(@RequestBody AssetRequest assetRequest) {
		return assetService.updateAssetAssigned(assetRequest);
	}
}
