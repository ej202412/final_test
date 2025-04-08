package com.example.FinalProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.TeacherDto;
import com.example.FinalProject.mappers.TeacherMapper;

@Service
public class TeacherServiceImpl implements TeacherService{

	@Autowired 
	private TeacherMapper teacherMapper;
	
	@Override
	public List<TeacherDto> getAllTeachers() {
		// TODO Auto-generated method stub
		return teacherMapper.getAll();
	}

	@Override
	public int insertTeacher(TeacherDto dto) {
		// TODO Auto-generated method stub
		return teacherMapper.insert(dto);
	}

	@Override
	public int updateTeacher(TeacherDto dto) {
		// TODO Auto-generated method stub
		return teacherMapper.update(dto);
	}

	@Override
	public int deleteTeacher(int teacherId) {
		// TODO Auto-generated method stub
		return teacherMapper.delete(teacherId);
	}

}
