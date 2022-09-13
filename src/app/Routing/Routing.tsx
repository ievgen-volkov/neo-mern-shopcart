import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "../ApprRoutes/AppRoutes";
import Welcome from "../../pages/Welcome/Welcome";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Cart from "../../pages/Cart/containers/Cart";
import Admin from "../../pages/Admin/Admin";
import Detail from "../../pages/Detail/Detail";
import SignUp from "../../pages/SignUp/SignUp";
import AddProductPage from "../../pages/Admin/AddProductPage/AddProductPage";
import { UpdateProductPage } from "../../pages/Admin/UpdateProductPage/UpdateProductPage";



const Routing = () => {
  return (
    <Routes>
      <Route path={AppRoutes.Welcome} element={<Welcome/>} />
      <Route path={AppRoutes.Home} element={<Home/>} />
      <Route path={AppRoutes.About} element={<About/>} />
      <Route path={AppRoutes.Cart} element={<Cart/>} />
      <Route path={AppRoutes.Admin} element={<Admin/>} />
      <Route path={AppRoutes.Detail} element={<Detail/>} />
      <Route path={AppRoutes.SignUp} element={<SignUp/>} />
      <Route path={AppRoutes.AddProductPage} element={<AddProductPage/>} />
      <Route path={AppRoutes.UpdateProductPage} element={<UpdateProductPage/>} />
    </Routes>
  );
};

export default Routing;
