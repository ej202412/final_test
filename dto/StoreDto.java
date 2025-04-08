package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("StoreDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StoreDto {
	private int storeNum;
	private String location;
	private String validCode;
}
