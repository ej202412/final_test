package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("LectureDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class LectureDto {
	private int lectureId;
	private String title;
	private int price;
	private int classTime;
}
