import { useParams } from "react-router"
import { ItemDetailContainer, Loader } from "../components"
import {useGetproductByID} from '../hooks/useGetAllProductsById';


export const Item = () => {
    const {id} = useParams()
    const {product, loading} = useGetproductByID(id)
    return loading ? <Loader/> : <ItemDetailContainer product = {product}/>

}