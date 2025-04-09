package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.TeacherDto;
import com.example.FinalProject.service.TeacherService;

@RestController
public class TeacherController {
	
	@Autowired TeacherService teacherService;
	
	@GetMapping("/teachers")
	public List<TeacherDto> getTeacherList(){
		return teacherService.getAllTeachers();
	}
	
	@PostMapping("/teachers")
	public String addTeacher(@RequestBody TeacherDto dto) {
		teacherService.updateTeacher(dto);
		return "success!";
	}
	
	@PatchMapping("/teachers/{id}")
	public String editTeacher(@RequestBody TeacherDto dto) {
		teacherService.updateTeacher(dto);
		return "success!";
	}
	
	@DeleteMapping("/teachers/{id}")
	public String deleteTeacher(@PathVariable int id) {
		teacherService.deleteTeacher(id);
		return "success!";
	}
	
}
