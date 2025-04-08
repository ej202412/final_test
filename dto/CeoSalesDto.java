package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("CeoSalesDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CeoSalesDto {
	private int salesId;
	private int storeNum;
	private int classId;
	private int lectureId;
	private String salesDate;
	private int salesAmount;
	private int studentCount;
}
