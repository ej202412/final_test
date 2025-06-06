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
	private String storeName;
	private String birth;
	private String phone;
	private int salary;
	private String status; // bcode : 'WORK', 'T_QUIT'
	private String statusName; // bname : '재직', '퇴직'
	
	// 강사 목록에서 현재 담당 수업 정보(LISTAGG)
	private String classNames;

	// 강사 수업 이력 정보
	private int classId;
	private String className;
	private int studentCount;
	private String startdate;
	private String enddate;
	private String starttime;
	private String endtime;
	
	// 강사 검색 조건
	private String condition;
	private String keyword;

}
