import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.css']
})

export class FurnituresComponent implements OnInit {

  constructor(private router:Router,private httpClient:HttpClient,public dialog:MatDialog,private addtFurnService:MainService) { }

  furnDetails:any=[];
  ngOnInit(): void {

    this.httpClient.get<any>("http://localhost:8083/api/v1/furnitures").subscribe((furnituresData:any)=>
    {
      this.furnDetails=furnituresData;
      return this.furnDetails;
    });
  }

  addTocart(data:any)
  {
    this.addtFurnService.addTOProduct(data).subscribe(()=>
    {
      alert("sucssesfully added to cart");
      this.router.navigate(['/carts']);
    }); 
  }
  
}
