import React, { useState, useEffect } from "react";
import ListaInventarios from "./ListaInventarios";
import { useNavigate } from "react-router-dom";
import CabecalhoMenuPrincipal from "./CabecalhoMenuPrincipal";
import RodapeMenuPrincipal from "./RodapeMenuPrincipal";

const MenuPrincipal = () => {

    let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
  
    let listaInventarios = JSON.parse(localStorage.getItem("inventarios"));

    const navigate = useNavigate();

    if (!listaUsuarios) {
        listaUsuarios = [];
        localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    }
  
    if (!listaInventarios || listaUsuarios.length === 0) {
        listaInventarios = [];
        localStorage.setItem("inventarios", JSON.stringify(listaInventarios));
    }

    const [inventarios, setInventarios] = useState(listaInventarios);
    const [usuarios, setUsuarios] = useState(listaUsuarios);

    useEffect(() => {
        if (usuarios.length === 0) {
            navigate("/new-user");
        }
    }, []);

    return (
        <div className="content">
            <CabecalhoMenuPrincipal username={usuarios.nome} />
            <ListaInventarios inventarios={inventarios} />
            <RodapeMenuPrincipal />
        </div>
    );
};

export default MenuPrincipal;
