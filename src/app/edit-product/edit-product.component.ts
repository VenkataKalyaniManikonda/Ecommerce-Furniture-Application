import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

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

    this.activatedRoute.paramMap.subscribe(params =>  
      {
        const productId=params.get('fur_Id');
        console.log(productId);
        if(productId)
        {
          console.log("inside if");
          this.getFurnitureData(productId);
        }
      })
  }

  get fur_Id() { return this.productData.controls['fur_Id']};
  get fur_Name() { return this.productData.controls['fur_Name']};
  get fur_CompanyName() { return this.productData.controls['fur_CompanyName']};
  get fur_price() { return this.productData.controls['fur_price']};
  get fur_kingSize() { return this.productData.controls['fur_kingSize']};
  get fur_QueenSize() { return this.productData.controls['fur_QueenSize']};

  getFurnitureData(id:any)
  {
    console.log("inside furnitureData");
    this.productService.getOneFurnitureData(id).subscribe(data =>
      {
        return this.editFurnitureData(data);
      })
  }

  editFurnitureData(furniture:any)
  {
    for(let index=0; index<furniture.length; index++)
    {
      const element=furniture[index];
      this.productData.patchValue({
        fur_Id: element.fur_Id,
        fur_Name : element.fur_Name,
        fur_CompanyName : element.fur_CompanyName,
        fur_price : element.fur_price,
        fur_kingSize : element.fur_kingSize,
        fur_QueenSize : element.fur_QueenSize,
      })
    }
  }
  
  updateFurniture(furData:any,furId:any)
  {
    this.productService.updateFurniture(furData,furId).subscribe(()=>
    {
      alert("updated Sucessfully ...");
      this.router.navigate(['/fur-modification']);
    })
  }

}
