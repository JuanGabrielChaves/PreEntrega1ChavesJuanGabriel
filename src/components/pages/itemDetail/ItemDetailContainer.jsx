/** @format */
import { useContext, useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
const ItemDetailContainer = () => {
    //Utilizacion de la función addToCart del contexto CartContext
    const { addToCart, getQuantityById } = useContext(CartContext);

    // Utilización del hook useParams:
    const { id } = useParams();
    const [item, setItem] = useState({});
    let initial = getQuantityById(Number(id));
    useEffect(() => {
        //Como el id de la base es de tipo number y lo que llega al front es de tipo string lo convierto
        let itemEncontrado = products.find((product) => product.id === Number(id));
        //Esto es una promesa que cuando si se pasa de un back hay que sacarlo
        const getProduct = new Promise((resolve, reject) => {
            if (itemEncontrado === undefined) {
                reject("Producto no encontrado");
            } else {
                resolve(itemEncontrado);
            }
        });
        getProduct.then((res) => {
            setItem(res);
        });
    }, [id]);

    const onAdd = (cantidad) => {
        let product = { ...item, quantity: cantidad };
        addToCart(product);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregado al carrito",
            showConfirmButton: false,
            timer: 1500,
        });
    };
    return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};

export default ItemDetailContainer;
