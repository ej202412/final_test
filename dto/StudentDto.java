package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("StudentDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentDto {
	private int studentId;
	private String name;
	private int storeNum;
	private int classId;
	private String phone;
	private String email;
}
