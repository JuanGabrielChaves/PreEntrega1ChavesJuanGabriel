/** @format */
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Tooltip from "@mui/material/Tooltip";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
const CartWidget = () => {
    return (
        <Link to={"/cart"}>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Carrito de compras">
                    <IconButton sx={{ p: 0 }}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartRoundedIcon sx={{ color: "#ffff" }} />
                        </Badge>
                    </IconButton>
                </Tooltip>
            </Box>
        </Link>
    );
};

export default CartWidget;
