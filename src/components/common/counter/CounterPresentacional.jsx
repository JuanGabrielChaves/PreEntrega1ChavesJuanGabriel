/** @format */

import { Button, IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CounterPresentacional = ({ restar, sumar, contador, onAdd }) => {
    return (
        <div>
            <Button variant="contained" onClick={restar}>
                -
            </Button>
            <h3 style={{ margin: 6, color: "#ffff", textAlign: "center" }}>{contador}</h3>
            <Button variant="contained" onClick={sumar}>
                +
            </Button>
            <div>
                <IconButton color="white" title="Agregar al carrito" onClick={() => onAdd(contador)}>
                    <AddShoppingCartIcon fontSize="large" color="action" />
                </IconButton>
            </div>
        </div>
    );
};

export default CounterPresentacional;
