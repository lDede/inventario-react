import React from "react";

const Inventario = ({ inventario }) => {
  
    return (
            <div className="inventory-title">
                <h4>{inventario.nome}</h4>
                <div className="inventory-timer">{inventario.hora}</div>
            </div>
    );
};

export default Inventario;