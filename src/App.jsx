/** @format */
import { ThemeProvider } from "@mui/material";
import NavBar from "./components/layout/navBar/NavBar";
import { themaClaro } from "./components/common/themeStyles.js";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
    return (
        <ThemeProvider theme={themaClaro}>
            <NavBar />
            <ItemListContainer greeting={"Bienvenidos a The Bookstore"} />
        </ThemeProvider>
    );
}
export default App;
