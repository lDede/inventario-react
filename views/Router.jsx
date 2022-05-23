import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CriaInventario from "./CriaInventario";
import MenuPrincipal from "./MenuPrincipal";
import EditaInventario from "./EditaInventario";
import NovoUsuario from "./NovoUsuario";

const Router = () => {
    // Componente responsável por navegar entre os componentes
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MenuPrincipal />} />
                <Route path="/new-user" element= {<NovoUsuario/>}/>
                <Route path="/new-inventory" element={<CriaInventario inventarios/>} />
                <Route path="/edit-inventory/:id" element={<EditaInventario inventarios/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;