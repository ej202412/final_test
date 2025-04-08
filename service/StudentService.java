package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.StudentDto;

public interface StudentService {
	public List<StudentDto> getAllStudents();
	public int insertStudent(StudentDto dto);
	public int updateStudent(StudentDto dto);
	public int deleteStudent(int studentId);
}
