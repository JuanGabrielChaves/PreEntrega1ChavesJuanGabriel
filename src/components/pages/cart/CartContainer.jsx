/** @format */
import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
    const { cart, clearCartAlert, deleteProductById, getTotalPrice } = useContext(CartContext);
    let totalPrice = getTotalPrice();

    return <Cart cart={cart} clearCartAlert={clearCartAlert} deleteProductById={deleteProductById} totalPrice={totalPrice} />;
};

export default CartContainer;
