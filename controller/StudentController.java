package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.StudentDto;
import com.example.FinalProject.service.StudentService;

@RestController
public class StudentController {
	
	@Autowired StudentService studentService;
	
	@GetMapping("/student")
	public List<StudentDto> getStudentList(){
		return studentService.getAllStudents();
	}
	
	@PostMapping("/student/add")
	public String addStudent(@RequestBody StudentDto dto) {
		studentService.insertStudent(dto);
		return "success!";
	}
	
	@PatchMapping("/student/edit")
	public String editStudent(@RequestBody StudentDto dto) {
		studentService.updateStudent(dto);
		return "success!";
	}
	
	@DeleteMapping("/student/delete")
	public String deleteStudent(int id) {
		studentService.deleteStudent(id);
		return "success!";
	}
}
