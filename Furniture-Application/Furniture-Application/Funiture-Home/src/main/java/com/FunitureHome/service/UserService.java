package com.FunitureHome.service;

import com.FunitureHome.model.User;

import java.util.List;

public interface UserService
{

      List<User> getAllUsers();
      User postUser(User user);

}
