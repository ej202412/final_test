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
	private String storeName;
	private String phone;
	private String status; // bcode : 'STUDY', 'S_QUIT'
	private String statusName; // bname : '재원', '퇴원'
	
	// 학생 목록에서 현재 수강 수업 정보(LISTAGG)
	private String classNames;
	private StudentClassHistoryDto history;
	
	// 학생 수강 이력 정보
	private int classId;
	private String className;
	private int teacherId;
	private String teacherName;
	private String startdate;
	private String enddate;
	private String starttime;
	private String endtime;
	
	// 학생 검색 조건
	private String condition;
	private String keyword;

}
