package com.example.FinalProject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.TeacherDto;

@Mapper
public interface TeacherMapper {
	List<TeacherDto> getTeacherList(String storeName); // 재직자 목록 가져오는 메소드
	List<TeacherDto> getClassHistory(int teacherId); // 특정 강사의 전체 수업 이력 가져오는 메소드
	TeacherDto getTeacherById(int teacherId); // 강사 정보 가져오는 메소드
	int insert(TeacherDto dto); // 강사 정보 등록 메소드
	int update(TeacherDto dto); // 강사 정보 수정 메소드
	// int delete(int teacherId);
}
