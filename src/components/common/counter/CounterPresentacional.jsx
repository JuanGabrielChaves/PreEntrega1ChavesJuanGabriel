/** @format */

import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
    return (
        <div>
            <button onClick={restar}>restar</button>
            <h3>{contador}</h3>
            <button onClick={sumar}>sumar</button>
            <IconButton color="white" title="Agregar al carrito" onClick={() => onAdd(contador)}>
                <AddShoppingCartIcon fontSize="large" color="action" />
            </IconButton>
        </div>
    );
};

export default CounterPresentacional;
