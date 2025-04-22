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
	private String phone;
	private int salary;
	private String status;
	private String birth;
	
	private String statusName; // 상태값 이름
	//class 정보 가져오기
	private String classNames;
	private int classId;
}
