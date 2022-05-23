/*import Inventarios from "../components/Inventarios.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";*/
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CriaInventario = () => {

    const [novoInventario, setNovoInventario] = useState({ id: "", nome: "", hora: "" });

    const criaNovoInventario = () => {
        if (novoInventario.nome === "" || novoInventario.hora === "") return;

        const inventariosExistentes = JSON.parse(localStorage.getItem("inventarios"));

        novoInventario.id = Math.random().toString().replace("0.", "");

        inventariosExistentes.push(novoInventario);

        localStorage.setItem("inventarios", JSON.stringify(inventariosExistentes));

        navigate("/");
    };

    const navigate = useNavigate();

    return (
        <div className="component componentBlue">
            <header className="menu menu-colored">
                <button
                    id="btnCanc1"
                    className="button button-round button-footer light"
                    onClick={() => navigate("/")}
                >
                    &lt;
                </button>

                <div className="menu-subpage">
                    <h3>Novo Inventário</h3>
                </div>
            </header>

            <div className="componentContent componentContentRadius">
                <h3 className="componentTitle">Crie um novo inventário para gerenciar</h3>

                <div className="field">
                    <label>Nome:</label>
                    <input
                        value={novoInventario.nome}
                        onChange={(e) => {
                            setNovoInventario({
                                ...novoInventario,
                                nome: e.target.value.toString()
                            });
                        }}
                        type="text"
                        autoComplete="off"
                    />
                </div>

                <div className="field">
                    <label>Hora:</label>
                    <input
                        value={novoInventario.hora}
                        onChange={(e) => {
                            setNovoInventario({
                                ...novoInventario,
                                hora: e.target.value.toString().trim()
                            });
                        }}
                        type="time"
                        autoComplete="off"
                    />
                </div>

                <div className="buttonGroup mt1 end">
                    <button
                        id="btnCanc2"
                        className="button quarter light"
                        onClick={() => navigate("/")}
                    >
                        Cancelar
                    </button>

                    <button
                        id="btnInc"
                        className="button quarter primary"
                        onClick={criaNovoInventario}
                    >
                        Criar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CriaInventario;
