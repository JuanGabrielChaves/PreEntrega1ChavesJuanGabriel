/** @format */

import { ThemeProvider } from "@mui/material";
import NavBar from "../../components/layout/navBar/NavBar";
import { Outlet } from "react-router-dom";
import { themaClaro } from "../common/themeStyles.js";
const Layout = () => {
    return (
        <ThemeProvider theme={themaClaro}>
            <NavBar />
            {/* Al manejar rutas hay que usar Outlet en vez de children */}
            <Outlet />
        </ThemeProvider>
    );
};

export default Layout;
