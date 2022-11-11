package com.example.inventory.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.inventory.entities.Asset;
import com.example.inventory.entities.AssetHistory;
import com.example.inventory.entities.Category;
import com.example.inventory.entities.User;
import com.example.inventory.model.AssetHistoryResponse;

public interface AssetHistoryDao extends JpaRepository<AssetHistory, Integer> {

	List<AssetHistory> findAllByAssetIdAndAssignedDateAfter(int assetId, Date date);

}
