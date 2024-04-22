/** @format */

import Layout from "./components/layout/Layout";
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
                    {/* Rutas personalizadas: Tiene la parte estática y la parte dinámica :id*/}
                    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
