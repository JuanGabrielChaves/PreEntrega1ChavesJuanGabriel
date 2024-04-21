/** @format */

import NavBar from "../../components/layout/navBar/NavBar";
const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default Layout;
