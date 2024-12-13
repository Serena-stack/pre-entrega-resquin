import { useEffect, useState } from "react";
import { getProductsByCategory } from "../services/productServices";

export const useGetproductByCategory = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByCategory("smartphones")
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
