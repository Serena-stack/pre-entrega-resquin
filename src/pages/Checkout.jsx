import React, { useContext } from "react" ;
import { CartContext } from "../context";

export const Checkout = ()  => {
    const { cartState, addItem, removeItem } = useContext(CartContext)

    return (
        <Box p={6} maxW="800px" mx="auto" h={"90vh"}>
            <heading as="h2" size= "lg" mb={6} textAlign="center">

                Detalle del Carrito
            </heading>
            </Box>)
        

    


        
        
}
