/** @format */
import { IconButton } from "@mui/material";
import "./ItemDetail.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../../common/themeStyles";

const ItemDetail = ({ item }) => {
    return (
        <>
            <h1>{item.title}</h1>
            <div className="grid-container">
                <div className="addToCart">
                    <IconButton color="white" title="Agregar al carrito">
                        <AddShoppingCartIcon fontSize="large" color="action" />
                    </IconButton>
                    <h2>$ {item.price}.-</h2>
                </div>
                <div className="imgDetail">
                    <img src={item.img} alt={`imagen del libro: ${item.title}`} />
                </div>
                <div className="detail">
                    <h2>Descripción:</h2>
                    <h4> {item.description}</h4>
                </div>
            </div>
        </>
    );
};

export default ItemDetail;
