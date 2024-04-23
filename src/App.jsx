/** @format */

import Layout from "./components/layout/Layout";
import Cart from "./components/pages/cart/Cart.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {/* Ruta por defecto cuando no encuentra la página */}
                    <Route path="*" element={<h1>Error 404 Pagina no encontrada !</h1>} />
                    {/* Ruta raiz */}
                    <Route path="/" element={<ItemListContainer />} />
                    {/* Ruta personalizada: Tiene la parte estática y la parte dinámica :id*/}
                    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />}></Route>

                    <Route path="/category/:name" element={<ItemListContainer />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
