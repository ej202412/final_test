package com.example.FinalProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.StudentDto;
import com.example.FinalProject.mappers.StudentMapper;

@Service
public class StudentServiceImpl implements StudentService{

	@Autowired
	private StudentMapper studentMapper;

	@Override
	public List<StudentDto> getAllStudents() {
		// TODO Auto-generated method stub
		return studentMapper.getAll();
	}

	@Override
	public int insertStudent(StudentDto dto) {
		// TODO Auto-generated method stub
		return studentMapper.insert(dto);
	}

	@Override
	public int updateStudent(StudentDto dto) {
		// TODO Auto-generated method stub
		return studentMapper.update(dto);
	}

	@Override
	public int deleteStudent(int studentId) {
		// TODO Auto-generated method stub
		return studentMapper.delete(studentId);
	}
	
}
