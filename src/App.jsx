/** @format */
import { ThemeProvider } from "@mui/material";
import { themaClaro } from "./components/common/themeStyles.js";
import Layout from "./components/layout/Layout";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";

function App() {
    return (
        <div>
            <ThemeProvider theme={themaClaro}>
                <Layout>
                    <ItemListContainer greeting={"Bienvenidos a The Bookstore"} />
                </Layout>
            </ThemeProvider>
        </div>
    );
}
export default App;
