import React from "react";
import { useNavigate } from "react-router-dom";
import Inventario from "./Inventario";

const ListaInventarios = ({ inventarios }) => {
    const imagem = "../assets/empty-box.png";

    const inventarioVazio = () => inventarios.length === 0;

    const navigate = useNavigate();

    return (
        <div className="inventory">
            <div className="inventory-main-title">
                <h2>Inventários</h2>
            </div>

            {inventarios && inventarios.length > 0 ? (
                <>
                    <div className="inventory-display">
                        {inventarios.map((inv) => {
                            return (
                                <div
                                    className={`inventory-content ${ inventarioVazio() ? "hidden" : ""}`}
                                    key={`inv-${inv.nome}`}
                                    onClick={() => navigate("/edit-inventory/" + inv.id)}
                                >
                                    <Inventario inventario={inv} />
                                </div>
                            );
                        })}
                    </div>
                </>
            ) : (
                <div id="blank" className={`inventory-display-blank ${inventarioVazio() ? "" : "hidden"}`}>
                    <img src={require=(imagem)} alt="vazio" />
                    <h4>Parece que não há inventários!</h4>
                </div>
            )}
        </div>
    );
};

export default ListaInventarios;