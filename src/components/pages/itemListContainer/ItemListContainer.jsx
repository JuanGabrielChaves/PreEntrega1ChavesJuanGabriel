/** @format */
import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import "./ItemListContainerStyles.css";
import ItemList from "./ItemList";
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            let resultado = true;
            if (resultado) {
                setTimeout(() => {
                    resolve(products);
                }, 2000);
            } else {
                reject({ status: 400, message: "Algo salio mal" });
            }
        });
        getProducts
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                setError(error);
            });
    }, []);

    return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
