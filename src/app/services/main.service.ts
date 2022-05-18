import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  
  constructor(private httpClient: HttpClient,private router:Router) { }
  isLoggedIn: boolean = false;
  redirectUrl: string = "";



  //To Get All Details
  adminDetails:any;
  admins:any;
  getAdmins(data:any)
  {
    this.httpClient.get<any>("http://localhost:8085/api/v2/admins").subscribe((adminData:any)=>
    {
      this.adminDetails=adminData;
      for(this.admins=0; this.admins<this.adminDetails.length; this.admins++)
      {
        if(data.adminName===this.adminDetails[this.admins].adminName && data.adminPassword===this.adminDetails[this.admins].adminPassword)
        {
          alert("successfully login");
          this.router.navigate(['/fur-modification']);
          
        }
      }
    });
  }

  // To Register A User
  postUser(data:any)
  {
    const userdata=this.httpClient.post<any>('http://localhost:8085/api/v2/user',data);
    alert("Registered Successfully!!!");
    this.router.navigate(['/userLogin']);
    return userdata;
  }

  // Getting All Users
  userDetails:any;
  user:any;
  getUsers(data:any)
  {
    this.httpClient.get<any>("http://localhost:8085/api/v2/users").subscribe((userData:any)=>
    {
      
      this.userDetails=userData;
      for(this.user=0;this.user<this.userDetails.length;this.user++)
      {
        if(data.userEmail===this.userDetails[this.user].userEmail && data.userPassWord===this.userDetails[this.user].userPassWord)
        {
          alert("successfully login");
          this.router.navigate(['/furnitures']);
        }
      }
    })
  }

//Adding a new Product
  postFurniture(data:any)
  {
    const newProduct=this.httpClient.post<any>('http://localhost:8083/api/v1/furniture',data);
    alert("Suceesfully Added");
    this.router.navigate(['/fur-modification']);
    return newProduct;
  }

//Delete A Product
 deleteProduct(data:any)
 {
   const deleProduct=this.httpClient.delete<any>('http://localhost:8083/api/v1/furniture/'+data)
   return deleProduct;
   
 }

//Add a Product to cart
  addTOProduct(productData:any)
  {
    return this.httpClient.post<any>("http://localhost:3000/cartsDta",productData);
  }

//Delete A Product From Cart
jsonUrl='http://localhost:3000/cartsDta';
  deleteCart(data:any)
  {
    const url=`${this.jsonUrl}/${data}`;
    return this.httpClient.delete(url);
  }

//Getting perticular id data for updation
  getOneFurnitureData(f_id:any)
  {
    return this.httpClient.get<any>("http://localhost:8083/api/v1/furnitures/"+f_id);
  }


  //update a furniture
  updateFurniture(data:any,id:any)
  {
    console.log("inside update service");
    return this.httpClient.put<any>('http://localhost:8083/api/v1/furniture/'+id,data);
  }
}
