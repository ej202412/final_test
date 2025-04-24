package com.example.FinalProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.StudentDto;
import com.example.FinalProject.mapper.StudentMapper;

@Service
public class StudentServiceImpl implements StudentService{
	
	@Autowired StudentMapper studentMapper;
	
	@Override
	public List<StudentDto> getAllStudents(String storeName) {
		// TODO Auto-generated method stub
		return studentMapper.getStudentList(storeName);
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
	public List<StudentDto> getAllClasses(int studentId) {
		// TODO Auto-generated method stub
		return studentMapper.getClassHistory(studentId);
	}

	@Override
	public List<StudentDto> getSearchResult(StudentDto dto) {
		// TODO Auto-generated method stub
		return studentMapper.getSearchResult(dto);
	}

	


}