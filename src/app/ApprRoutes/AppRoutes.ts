import { ContactMail, HomeOutlined, InfoOutlined, ShoppingCart, SignalCellularNullTwoTone } from "@material-ui/icons";
import React from "react";

export enum AppRoutes {
  Welcome='/' ,
  Home='/home',
  About='/about',
  Cart= '/cart',
  Detail ='/product/:id',
  Admin ='/admin',
  AddProductPage='/admin/add_product',
  UpdateProductPage='/admin/update_product/:id',
  Login ='/login',
  SignUp ='/signup'
}

export interface NavItem {
  id:number;
  label:string;
  path: AppRoutes;
  icon?: React.ReactNode;
}

export const navItems:NavItem[] = [
  { id: 1, label:"Home" , path: AppRoutes.Home, icon: HomeOutlined},
  { id: 2, label:"About" , path: AppRoutes.About, icon: InfoOutlined},
  { id: 3, label:"Cart" , path: AppRoutes.Cart , icon: ShoppingCart},
  { id: 4, label:"Admin" , path: AppRoutes.Admin , icon: ContactMail},
]
