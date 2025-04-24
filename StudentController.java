package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.ClassDto;
import com.example.FinalProject.dto.StudentDto;
import com.example.FinalProject.service.StudentService;

@RestController
public class StudentController {
	
	@Autowired StudentService studentService;
	
	// 테스트용
	@GetMapping("/students/ping")
	public String ping() {
		return "pong";
	}
	
	// students?storeName="강남점" 
	@GetMapping("/students")
	public List<StudentDto> getAllStudents(@RequestParam String storeName){
		return studentService.getAllStudents(storeName);
	}
	
	// students
	@PostMapping("/students")
	public String insertStudent(@RequestBody StudentDto dto) {
		studentService.insertStudent(dto);
		return "success!";
	}
	
	// students/1
	@PatchMapping("/students/{studentId}")
	public String updateStudent(@PathVariable int studentId, @RequestBody StudentDto dto) { //전달되는 studentId 를 studentId 로 StudentDto 에 사용
		dto.setStudentId(studentId);
		studentService.updateStudent(dto);
		return "success!";
	}
	/*
	@DeleteMapping("/students/{id}")
	public String deleteStudent(@PathVariable int id) {
		studentService.deleteStudent(id);
		return "success!";
	}
	*/
	// students/class?studentId=1
	@GetMapping("/students/class")
	public List<StudentDto> getAllClasses(@RequestParam int studentId){
		return studentService.getAllClasses(studentId);
	}
	
	@GetMapping("/students?status=study&condition=student&keyword=")
	public List<StudentDto> getSearchResult(@RequestBody StudentDto dto){
		return studentService.getSearchResult(dto);
	}
}