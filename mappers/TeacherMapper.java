package com.example.FinalProject.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.TeacherDto;

@Mapper
public interface TeacherMapper {
	List<TeacherDto> getAll();
	TeacherDto getById(int id);
	int insert(TeacherDto dto);
	int update(TeacherDto dto);
	int delete(int id);
}
