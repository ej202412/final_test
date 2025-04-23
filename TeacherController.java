package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.TeacherDto;
import com.example.FinalProject.service.TeacherService;

@RestController
public class TeacherController {
	
	@Autowired TeacherService teacherService;
	
	//테스트용
	@GetMapping("/teachers/ping")
	public String ping() {
		return "pong";
	}
	
	// teachers?storeNum=1
	@GetMapping("/teachers")
	public List<TeacherDto> getAllTeachers(@RequestParam String storeName){
		return teacherService.getAllTeachers(storeName);
	}
	
	// teachers
	@PostMapping("/teachers")
	public String insertTeacher(@RequestBody TeacherDto dto) {
		teacherService.insertTeacher(dto);
		return "success!";
	}
	
	// teachers/1
	@PatchMapping("/teachers/{teacherId}")
	public String updateTeacher(@PathVariable int teacherId, @RequestBody TeacherDto dto) {
		dto.setTeacherId(teacherId);
		teacherService.updateTeacher(dto);
		return "success!";
	}
	/*
	@DeleteMapping("/teachers/{id}")
	public String deleteTeacher(@PathVariable int id) {
		teacherService.deleteTeacher(id);
		return "success!";
	}
	*/
	// teachers/class?teacherId=1
	@GetMapping("/teachers/class")
	public List<TeacherDto> getAllClasses(@RequestParam int teacherId){
		return teacherService.getAllClasses(teacherId);
	}
}