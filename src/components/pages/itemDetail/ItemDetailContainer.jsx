/** @format */
import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    // Utilización del hook useParams:
    const { id } = useParams();
    const [item, setItem] = useState({});

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
    console.log(item);
    return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
