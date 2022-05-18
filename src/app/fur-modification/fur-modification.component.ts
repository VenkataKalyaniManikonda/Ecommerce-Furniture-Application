import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-fur-modification',
  templateUrl: './fur-modification.component.html',
  styleUrls: ['./fur-modification.component.css']
})
export class FurModificationComponent implements OnInit {

  constructor(private httpClient:HttpClient,private deleteService:MainService, private router:Router) { }
  furnDetails:any=[];
  

  ngOnInit(): void {

    this.httpClient.get<any>("http://localhost:8083/api/v1/furnitures").subscribe((furnituresData:any)=>
    {
      this.furnDetails=furnituresData;
      console.log(this.furnDetails);
      return this.furnDetails;
    });

  }

  deleteProduct(data:any)
  {
    this.deleteService.deleteProduct(data).subscribe((message:any)=>
    {
    });
    alert("Deleted Successfully");
    window.location.reload();
  }

  homepage(){
    this.router.navigate(['/']);
  }
  
  updataPage(furId:any){
    this.router.navigate(['/editproduct',furId])
  }
}
