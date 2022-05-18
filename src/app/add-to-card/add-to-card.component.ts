import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-add-to-card',
  templateUrl: './add-to-card.component.html',
  styleUrls: ['./add-to-card.component.css']
})
export class AddToCardComponent implements OnInit {

  constructor(private httpClient:HttpClient,private router:Router,private deleteService:MainService) { }

  productDetails:any=[];
  ngOnInit(): void {

    this.httpClient.get<any>("http://localhost:3000/cartsDta").subscribe((furnitureData:any)=>
    {
      this.productDetails=furnitureData;
      return this.productDetails;
    });
  }

  deleteProduct(data:any)
  {
    this.deleteService.deleteCart(data).subscribe(()=>
    {
      window.location.reload();
      alert("Cart Deleted Successfully");
    })
  }

}
