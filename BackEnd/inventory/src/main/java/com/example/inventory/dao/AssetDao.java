package com.example.inventory.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.inventory.entities.Asset;
import com.example.inventory.entities.User;

public interface AssetDao extends JpaRepository<Asset, Integer> {

	List<Asset> findByAssetTypeAndAvailabilityStatus(String assetType, Boolean isAvailable);

	Asset findByAssetId(int assetId);


}
