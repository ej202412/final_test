package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("InventoryDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class InventoryDto {
	private int inventoryId;
	private int storeNum;
	private int productId;
	private int quantity;
}
