/** @format */
import { useEffect, useState } from "react";
import "./ItemListContainerStyles.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import SkeletonCard from "../../common/skeleton/SkeletonCard.jsx";
import "./ItemListContainerStyles.css";
import { db } from "../../../firebaseConfig.js";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { name } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const productsCollection = collection(db, "products");
        let consulta = productsCollection;
        if (name) {
            consulta = query(productsCollection, where("category", "==", name));
        }
        getDocs(consulta).then((res) => {
            let newArray = res.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            });
            setItems(newArray);
        });
    }, [name]);

    if (items.length === 0) {
        return (
            <div className="skeletonContainer">
                <div>
                    <SkeletonCard />
                </div>
                <div>
                    <SkeletonCard />
                </div>
                <div>
                    <SkeletonCard />
                </div>
                <div>
                    <SkeletonCard />
                </div>
                <div>
                    <SkeletonCard />
                </div>
            </div>
        );
    }
    return <ItemList items={items} />;
};

export default ItemListContainer;
