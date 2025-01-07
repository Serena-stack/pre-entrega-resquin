import { useContext } from "react";
import { IconButton } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaShoppingCart } from 'react-icons/fa';
import { Flex } from '@chakra-ui/react';
import { Link } from  "react-router-dom";
import { CartContext } from "../../context";

const CartWidget = () => {
const { cart } = useContext(CartContext); 

  const totalItems = cart.reduce((acc, item) => acc + item.qtyCartItem, 0); 
return (
    <div>
    <img src="cart-icon.png" alt="Cart" />
      {totalItems > 0 && <span>{totalItems}</span>} {}
    </div>
);
};

export default CartWidget;



