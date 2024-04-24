/** @format */

import { ThemeProvider } from "@mui/material";
import NavBar from "../../components/layout/navBar/NavBar";
import { Outlet } from "react-router-dom";
import { themaClaro } from "../common/themeStyles.js";
import Footer from "./footer/Footer.jsx";
import "./Layout.css";
const Layout = () => {
    return (
        <ThemeProvider theme={themaClaro}>
            <NavBar />
            {/* Al manejar rutas hay que usar Outlet en vez de children */}
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
