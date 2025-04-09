package com.example.FinalProject.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.StudentDto;

@Mapper
public interface StudentMapper {
	List<StudentDto> getAll();
	StudentDto getById(int sutdentId);
	int insert(StudentDto dto);
	int update(StudentDto dto);
	int delete(int studentId);
	int updateCount(String storenum); // 학생 수 업데이트 메소드
}
