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
	private String phone;
	private String status;
	
	private String statusName; // 상태값 이름
	//class 정보 가져오기
	private String classNames;
	private int classId;
}
