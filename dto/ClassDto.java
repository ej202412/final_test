package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("ClassDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ClassDto {
	private int classId;
	private int lectureId;
	private int storeNum;
	private String description;
	private int teacherId;
	private String startDate;
	private String endDate;
	private int maxStudent;
	private int currentStudent;
}
