/** @format */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../../common/cartWidget/CartWidget.jsx";
import { Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

const pages = ["home", "terror", "intriga", "novela", "ciencia-ficcion", "fantastico"];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link
                        underline="none"
                        component={ReactRouterLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "roboto",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "black",
                            textDecoration: "none",
                            fontSize: "2rem",
                            "&:hover": {
                                color: "white",
                            },
                        }}>
                        The Bookstore
                    </Link>

                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}>
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Link
                                        component={ReactRouterLink}
                                        to={page !== "home" ? `/category/${page}` : `/`}
                                        key={page}
                                        sx={{
                                            m: 0,
                                            display: "block",
                                            fontSize: "1rem",
                                            "&:hover": {
                                                color: "black",
                                            },
                                        }}
                                        onClick={handleCloseNavMenu}
                                        underline="none">
                                        {page}
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "center" } }}>
                        {pages.map((page) => (
                            <Link
                                component={ReactRouterLink}
                                to={page !== "home" ? `/category/${page}` : `/`}
                                key={page}
                                sx={{
                                    m: 2,
                                    color: "white",
                                    display: "block",
                                    fontSize: "2rem",
                                    fontFamily: "serif",
                                    "&:hover": {
                                        color: "black",
                                    },
                                }}
                                onClick={handleCloseNavMenu}
                                underline="none">
                                {page}
                            </Link>
                        ))}
                    </Box>
                    <CartWidget />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
