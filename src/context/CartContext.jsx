import React, { createContext, useState } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);


const addItem = (product, qtyItem) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
    
    setCart(
        cart.map((item) =>
        item.id === product.id
            ? { ...item, qtyCartItem: item.qtyCartItem + qtyItem }
            : item
        )
    );
    } else {
    
    setCart([...cart, { ...product, qtyCartItem: qtyItem }]);
    }
};


const removeItem = (product) => {
    const isProductInCart = cart.find((item) => item.id === product.id);

    if (isProductInCart) {
    
    if (isProductInCart.qtyCartItem === 1) {
        setCart(cart.filter((item) => item.id !== product.id));
    } else {
        
        setCart(
        cart.map((item) =>
            item.id === product.id
            ? { ...item, qtyCartItem: item.qtyCartItem - 1 }
            : item
        )
        );
    }
    }
};

return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
    {children}
    </CartContext.Provider>
);
};

export default CartContext;
