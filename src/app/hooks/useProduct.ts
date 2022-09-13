import { useParams } from "react-router-dom";
import { useAppSelector } from "./useAppDispatch";
import { filteredProducts } from "../../store/selectors";


export const useProduct = () =>{
  const { id } = useParams()
  const { products } = useAppSelector(filteredProducts)
  const product = products.find(p => p._id === id)

  return { product }
}
