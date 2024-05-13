/** @format */

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        //siempre devuelve un boolean
        return cart.some((product) => product.id === id);
    };

    const getQuantityById = (id) => {
        let product = cart.find((product) => product.id === id);
        return product?.quantity;
    };

    const getTotalPrice = () => {
        let total = cart.reduce((accum, product) => {
            return accum + product.quantity * product.price;
        }, 0);
        return total;
    };

    const getTotalItems = () => {
        let total = cart.reduce((accum, product) => {
            return accum + product.quantity;
        }, 0);
        return total;
    };

    const addToCart = (product) => {
        let productExist = isInCart(product.id);
        if (productExist) {
            let newArray = cart.map((elemento) => {
                if (elemento.id === product.id) {
                    return { ...elemento, quantity: product.quantity };
                } else {
                    return elemento;
                }
            });
            setCart(newArray);
        } else {
            setCart([...cart, product]);
        }
    };

    const clearCart = () => setCart([]);

    const deleteProductById = (id) => {
        const newArray = cart.filter((product) => product.id !== id);
        setCart(newArray);
    };

    let data = { cart, addToCart, clearCart, deleteProductById, getQuantityById, getTotalPrice, getTotalItems };

    //retorno el contexto en su metodo Provider
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
