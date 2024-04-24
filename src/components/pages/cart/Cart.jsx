/** @format */

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = () => {
    return (
        <div>
            <h1>Este es el carrito</h1>
            <h2>Aca van los productos que agregamos</h2>
            <div className="btn">
                <Link to={"/checkout"}>
                    <Button variant="contained">Finalizar Compra</Button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;
