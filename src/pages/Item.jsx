import { useParams } from "react-router"
import { ItemDetailContainer, Loader } from "../components"
import {useGetAllproductById} from '../hooks/useGetAllProductsById';
import { CartContext } from "../context";
import { useContext } from "react";


export const Item = () => {
    const {id} = useParams();
    const {product, loading} = useGetproductByID(id);
    return loading ? <Loader/> : <ItemDetailContainer product = {product}/>

}