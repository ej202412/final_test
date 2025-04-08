package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("OrderRequestDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderRequestDto {
	private int orderId;
	private int storeNum;
	private int productId;
	private String requestDate;
	private int quantity;
	private String status;
	private String replyDate;
}
