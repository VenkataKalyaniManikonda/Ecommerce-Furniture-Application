import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  constructor(private adminservice: MainService,private router:Router) { }

  adminDetails:any={}; 

  ngOnInit(): void {
  }

  adminLogin()
  {
    this.adminservice.getAdmins(this.adminDetails);
  }
  
  homepage(){
    this.router.navigate(['/']);
  }
}
