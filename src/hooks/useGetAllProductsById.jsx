import { useState, useEffect } from "react"
import { getProductById } from "../services/productServices"

export const useGetproductByID = (id) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProductById(id)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err))
            .finally(setLoading(false))
    }, [])
    return { product, loading }
}