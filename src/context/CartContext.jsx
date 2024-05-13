/** @format */

import { createContext, useState } from "react";
import Swal from "sweetalert2";

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

    const clearCartAlert = () => {
        Swal.fire({
            title: "Seguro que queres limpiar el carrito?",
            position: "center",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "Confirmo",
            denyButtonText: `Cancelar`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                clearCart();
                Swal.fire("Se ha limpiado el carrito", "", "success");
            } else if (result.isDenied) {
                Swal.fire({
                    position: "center",
                    icon: "info",
                    title: "Carrito intacto",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    const deleteProductById = (id) => {
        const newArray = cart.filter((product) => product.id !== id);
        setCart(newArray);
    };

    let data = { cart, addToCart, clearCart, deleteProductById, getQuantityById, getTotalPrice, getTotalItems, clearCartAlert };

    //retorno el contexto en su metodo Provider
    return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
