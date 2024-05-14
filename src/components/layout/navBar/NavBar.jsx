/** @format */

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import CartWidget from "../../common/cartWidget/CartWidget.jsx";

const pages = ["home", "terror", "intriga", "novela", "ciencia-ficcion"];

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
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontFamily: "roboto",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                        The bookstore
                    </Typography>

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
                                    <Typography textAlign="center">
                                        <Button href={page !== "home" ? `/category/${page}` : `/`} key={page} onClick={handleCloseNavMenu} sx={{ m: 0, display: "block", fontSize: "1rem" }}>
                                            {page}
                                        </Button>
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "roboto",
                            fontWeight: 700,
                            letterSpacing: ".1rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}>
                        The bookstore
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex", justifyContent: "center" } }}>
                        {pages.map((page) => (
                            <Button href={page !== "home" ? `/category/${page}` : `/`} key={page} onClick={handleCloseNavMenu} sx={{ m: 2, color: "white", display: "block", fontSize: "1.3rem" }}>
                                {page}
                            </Button>
                        ))}
                    </Box>
                    <CartWidget />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;
