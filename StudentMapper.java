package com.example.FinalProject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.StudentDto;

@Mapper
public interface StudentMapper {
	List<StudentDto> getStudentList(String storeName); // 재원생 목록 가져오는 메소드
	List<StudentDto> getClassHistory(int studentId); // 특정 학생의 전체 수강 이력 가져오는 메소드
	// List<ClassDto> getCurrentClasses(int studentId); // 특정 학생의 현재 수강 수업 가져오는 메소드
	StudentDto getStudentById(int studentId); // 학생 정보 가져오는 메소드
	int insert(StudentDto dto); // 학생 정보 등록 메소드
	int update(StudentDto dto); // 학생 정보 수정 메소드
	// int delete(int studentId);
	// int updateCount(int storeNum); // 학생 수 업데이트 메소드

}
