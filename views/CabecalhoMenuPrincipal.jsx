import React from "react";

const CabecalhoMenuPrincipal = (props) => {
    return (
        <>
            <header className="menu">
                <div id="userName" className="user-greeting">
                    <h3>Olá, {props.username}!</h3>
                </div>
                <div className="user-profile warning"></div>
            </header>


            <div className="searchbar">
                <input type="search" placeholder="Buscar inventário" />
            </div>
        </>
    );
};

export default CabecalhoMenuPrincipal;
