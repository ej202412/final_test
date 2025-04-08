package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("ProductDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDto {
	private int productId;
	private String productName;
	private String unit;
	private int price;
}
