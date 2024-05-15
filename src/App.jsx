/** @format */

import Layout from "./components/layout/Layout";
import Checkout from "./components/pages/checkout/Checkout.jsx";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";
import CartContainer from "./components/pages/cart/CartContainer.jsx";
function App() {
    return (
        <BrowserRouter>
            {/* Envuelvo toda la aplicación con el Componente proveedor del contexto */}
            <CartContextProvider>
                <Routes>
                    <Route element={<Layout />}>
                        {/* Ruta por defecto cuando no encuentra la página */}
                        <Route path="*" element={<h1>Error 404 Pagina no encontrada !</h1>} />
                        {/* Ruta raiz */}
                        <Route path="/" element={<ItemListContainer />} />
                        {/* Ruta personalizada: Tiene la parte estática y la parte dinámica :id*/}
                        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<CartContainer />}></Route>
                        <Route path="/checkout" element={<Checkout />}></Route>
                        <Route path="/category/:name" element={<ItemListContainer />}></Route>
                    </Route>
                </Routes>
            </CartContextProvider>
        </BrowserRouter>
    );
}
export default App;
