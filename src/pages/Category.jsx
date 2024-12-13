import React from 'react';
import { useGetproductByCategory } from '../hooks/useGetProductByCategory';
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer';
import { Loader } from '../components';

export const Category = () => {
    const { loading, products } = useGetproductByCategory();

    return loading ? <Loader/> :<ItemListContainer products={products} />;
}
