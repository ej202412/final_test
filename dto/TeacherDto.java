package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("TeacherDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class TeacherDto {
	private int teacherId;
	private String name;
	private int storeNum;
	private int lectureId;
	private String phone;
	private String email;
	private int salary;
	
}
