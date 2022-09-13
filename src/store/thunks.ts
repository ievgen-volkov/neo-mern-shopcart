import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "../api/httpService";
import { ProductItem } from "../shared/models/models";


export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
 async (_,{rejectWithValue})=>{
   try {
     const response = await httpService.getAll('products')
     if (response.status !== 200) {
       console.log("Something vent wrong!!!")
     }
     return response.data

   } catch (e) {
     const error = e as Error
     console.log(error.message);
     return   rejectWithValue(error.message)
   }
 }
)
export const postProduct = createAsyncThunk(
  'products/postProduct',
  async (product:ProductItem,{rejectWithValue})=>{
    try {
      const response = await httpService.postProduct('products',product)
      if (response.status !== 201) {
        console.log("Something vent wrong!!!")
      }
      return response.data

    } catch (e) {
      const error = e as Error
      return   rejectWithValue(error.message)
    }
  }
)

export const deleteProduct = createAsyncThunk(
  'products/postProduct',
  async (id:string,{rejectWithValue})=>{
    try {
      const response = await httpService.deleteProduct(`products/${id}`)
      if (response.status !== 200) {
        console.log("Something vent wrong!!!")
      }
      return response.data

    } catch (e:any) {
      return   rejectWithValue(e.message)
    }
  }
)
export const updateProduct = createAsyncThunk(
  'products/postProduct',
  async (product:ProductItem,{rejectWithValue})=>{
    try {
      const response = await httpService.updateProduct(`products/${product._id}`,product)
      if (response.status !== 200) {
        console.log("Something vent wrong!!!")
      }
      return response.data

    } catch (e:any) {
      return   rejectWithValue(e.message)
    }
  }
)
