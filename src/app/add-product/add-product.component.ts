import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MainService } from '../services/main.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private productService:MainService,private activatedRoute : ActivatedRoute, private router : Router) { }

  productData:any;
  ngOnInit(): void {
    this.productData=new FormGroup({
      fur_Id:new FormControl('',[Validators.required]),
      fur_Name:new FormControl('',[Validators.required]),
      fur_CompanyName:new FormControl('',[Validators.required]),
      fur_price:new FormControl('',[Validators.required]),
      fur_kingSize:new FormControl('',[Validators.required]),
      fur_QueenSize:new FormControl('',[Validators.required])
    })
  }


  get fur_Id() { return this.productData.controls['fur_Id']};
  get fur_Name() { return this.productData.controls['fur_Name']};
  get fur_CompanyName() { return this.productData.controls['fur_CompanyName']};
  get fur_price() { return this.productData.controls['fur_price']};
  get fur_kingSize() { return this.productData.controls['fur_kingSize']};
  get fur_QueenSize() { return this.productData.controls['fur_QueenSize']};


  addProduct()
  {
    this.productService.postFurniture(this.productData.value).subscribe(()=>
    {
      window.location.reload();
    });
  }
}
