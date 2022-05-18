package com.FunitureHome.controller;

import com.FunitureHome.model.User;
import com.FunitureHome.service.AdiminService;
import com.FunitureHome.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v2")
@CrossOrigin(origins = "*")
public class AdminController {

    private AdiminService adiminService;
    private UserService userService;


    @Autowired
    public AdminController(AdiminService adiminService, UserService userService) {
        this.adiminService = adiminService;
        this.userService = userService;
    }


    @GetMapping("/admins")
    public ResponseEntity<?> getAllAdmins()
    {
        return new ResponseEntity<>(adiminService.getAllAdmins(), HttpStatus.OK);
    }


    @PostMapping("/user")
    public ResponseEntity<?> postUser(@RequestBody User user)
    {
        return new ResponseEntity<>(userService.postUser(user), HttpStatus.CREATED);
    }
    @GetMapping("/users")
    public ResponseEntity<?> getAllUsers()
    {
        return new ResponseEntity<>(userService.getAllUsers(),HttpStatus.OK);
    }
}
