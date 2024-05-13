/** @format */

import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, clearCartAlert, deleteProductById, totalPrice }) => {
    console.log(cart);
    return (
        <div>
            <h1>Productos agregados al carrito</h1>
            {cart.length > 0 && (
                <div className="listContainer">
                    <div>Descripción del Producto</div>
                    <div>Precio</div>
                    <div>Cantidad</div>
                </div>
            )}

            {cart.map((product) => (
                <div className="itemContainer" key={product.id}>
                    <h4>{product.title}</h4>
                    <h5>$ {product.price}</h5>
                    <h5>{product.quantity}</h5>
                    <Button variant="contained" className="itemBtn" onClick={() => deleteProductById(product.id)}>
                        Eliminar
                    </Button>
                </div>
            ))}
            <h2>El total a pagar es $ {totalPrice}</h2>
            {cart.length > 0 && (
                <div className="btn">
                    <Button variant="contained" onClick={clearCartAlert}>
                        Limpiar Carrito
                    </Button>
                    <Link to={"/checkout"}>
                        <Button variant="contained">Finalizar Compra</Button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
