/** @format */
import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import "./ItemListContainerStyles.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        let productsFiltered = products.filter((product) => product.category === name);

        const getProducts = new Promise((resolve, reject) => {
            let resultado = true;
            if (resultado) {
                resolve(name ? productsFiltered : products);
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
    }, [name]);

    return <ItemList items={items} error={error} />;
};

export default ItemListContainer;
