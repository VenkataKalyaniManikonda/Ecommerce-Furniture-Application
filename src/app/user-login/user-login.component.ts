import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router:Router,private userService:MainService) { }
  userLogin:any={};

  ngOnInit(): void {
  }

  login()
  {
    this.userService.getUsers(this.userLogin); 
  }

  register()
  {
    this.router.navigate(['/userRegister']);
  }
}
