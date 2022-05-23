import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {Image} from "react-native";

const EditaInventario = () => {

    const params = useParams();
    let inventarioSelecionado = [];
    const { id } = params;

    let todosOsInventarios = JSON.parse(localStorage.getItem("inventarios"));

    const carregaDadosInventario = () => {
        console.log("todosOsInventarios", todosOsInventarios);

        var count = todosOsInventarios.length;

        for (var i = 0; i < count; i++) {
            if (todosOsInventarios[i].id === params.id) {
                inventarioSelecionado = todosOsInventarios[i];
                break;
            }
        }

        console.log("inventarioSelecionado", inventarioSelecionado);
    };

    const apagaInventario = () => {
        console.log("no");
        var count = todosOsInventarios.length;
        for (var i = 0; i < count; i++) {
            if (todosOsInventarios[i] === inventarioSelecionado) {
                console.log("entrei");
                console.log("inventarioRemovido", todosOsInventarios);
                todosOsInventarios.splice(i, 1);

                break;
            }
        }
        localStorage.setItem("inventarios", JSON.stringify(todosOsInventarios));
        navigate("/");
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="component componentBlue">
                {carregaDadosInventario()}

                <header className="menu menu-colored">
                    {console.log("oi")}
                    <button
                        id="btnCanc3"
                        className="button button-round button-footer light"
                        onClick={() => navigate("/")}
                    >
                        &lt;
                    </button>
                    <div className="menu-subpage">
                        <h3 id="inventoryName">{inventarioSelecionado.nome}</h3>
                    </div>
                </header>

                <div className="componentContent componentContentRadius">
                    <h3 className="componentTitle">Detalhes do Inventário</h3>
                    <div className="inventory-management">
                        <button className="button buttonLight">
                            <img src="../assets/magic-box.png" alt="itens" /> Gerenciar itens
                        </button>
                    </div>
                </div>

                <div className="blankspace"></div>

                <div className="componentContent">
                    <div className="inventory-management">
                        <button id="inventoryTime" className="button buttonLight">
                            <img src="../assets/bell.png" alt="lembrar" /> Conferir às{" "}
                            {inventarioSelecionado.hora}
                        </button>

                        <hr></hr>

                        <button className="button buttonLight">
                            <img src="../assets/repeat.png" alt="repetir" /> Repetir
                        </button>
                    </div>
                </div>

                <div className="footer">
                    <br></br>
                    <br></br>
                    <button
                        id="btnDel"
                        className="button button-round button-footer danger"
                        onClick={() => apagaInventario(inventarioSelecionado)}
                    >
                        Excluir
                    </button>
                </div>
            </div>
        </>
    );
};
export default EditaInventario;
