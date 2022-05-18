import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddToCardComponent } from './add-to-card/add-to-card.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FurModificationComponent } from './fur-modification/fur-modification.component';
import { FurnituresComponent } from './furnitures/furnitures.component';

import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
  },
  {
    path:"adminLogin",
    component:AdminLoginComponent
  },
  {
    path:"fur-modification",
    component:FurModificationComponent
  },
 
  {
    path:"addProduct",
    component:AddProductComponent,
  },
  {
    path:"editproduct/:fur_Id",
    component:EditProductComponent,
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  },
  {
    path:"userRegister",
    component:UserRegisterComponent
  },
  {
    path:"furnitures",
    component:FurnituresComponent  
  },
 
  {
    path:"carts",
    component:AddToCardComponent
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
