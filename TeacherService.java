package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.TeacherDto;

public interface TeacherService {
	public List<TeacherDto> getAllTeachers(int storeNum);
	public int insertTeacher(TeacherDto dto);
	public int updateTeacher(TeacherDto dto);
	public int deleteTeacher(int teacherId); 
}
