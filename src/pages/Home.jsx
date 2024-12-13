import { Flex } from "@chakra-ui/react";

import { useGetAllProducts } from "../hooks/useGetAllProducts";
import {Loader, ItemListContainer} from "../components";



export const Home = () => {
    
    const {loading, products} = useGetAllProducts();


    return loading ? (
        <Loader />
    ) : (
        <Flex alignItems={"center"} textAlign={"center"} justifyContent={"center"}>
            <ItemListContainer pro={products} />
        </Flex>
    );

}