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
		int result = studentMapper.insert(dto); // 학생 추가 후
    		studentMapper.updateCount(dto.getStorenum()); // 학생 수 업데이트
    		return result;
	}

	@Override
	public int updateStudent(StudentDto dto) {
		int result = studentMapper.update(dto);		
		return result; 
	}

	@Override
	public int deleteStudent(int studentId) {
		int result = studentMapper.delete(studentId); // 학생 삭제 후
		StudentDto dto = studentMapper.getById(studentId); // storenum 을 알아야
    		studentMapper.updateCount(dto.getStorenum()); // 학생 수 업데이트
    		return result;
	}
	
}
