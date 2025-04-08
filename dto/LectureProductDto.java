package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("LectureProductDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LectureProductDto {
	private int lectureId;
	private int productId;
}
