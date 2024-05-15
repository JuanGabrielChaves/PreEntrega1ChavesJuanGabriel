/** @format */
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);
    let totalItems = getTotalItems();
    return (
        <Link to={"/cart"}>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Carrito de compras">
                    <IconButton sx={{ p: 0 }}>
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCartRoundedIcon
                                sx={{
                                    color: "#ffff",
                                    "&:hover": {
                                        color: "black",
                                    },
                                }}
                            />
                        </Badge>
                    </IconButton>
                </Tooltip>
            </Box>
        </Link>
    );
};

export default CartWidget;
