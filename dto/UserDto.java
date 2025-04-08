package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("UserDto")
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {
	private int userId;
	private String userName;
	private String password;
	private String role;
	private int storeNum;
}
