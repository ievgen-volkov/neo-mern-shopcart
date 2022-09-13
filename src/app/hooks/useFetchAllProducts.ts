import { useAppDispatch } from "./useAppDispatch";
import { useEffect } from "react";
import { fetchAllProducts } from "../../store/thunks";

export const useFetchAllProducts = () => {
  const dispatch = useAppDispatch()
  useEffect(()=> {
    dispatch(fetchAllProducts())
  },[dispatch])
}
