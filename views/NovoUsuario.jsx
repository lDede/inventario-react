import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const NovoUsuario = () => {

    const navigate = useNavigate();
    const [usuario, setNovoUsuario] = useState({ id: "", nome: ""});

    const criaNovoUsuario = () => {
        if(usuario.nome === "") return;

        usuario.id = Math.random().toString().replace('0.', '');
      
      	localStorage.setItem("usuarios", JSON.stringify(usuario));

        navigate("/");
    };

    return (
        <>
            <header className="menu menu-colored">
                <div className="menu-subpage">
                    <h3>Novo usuário</h3>
                </div>
            </header>

            <div className="componentContent componentContentRadius">
                <h3 className="componentTitle">Qual o seu nome?</h3>
            
                <div className="field">
                    <label>Nome:</label>
                    <input
                        value={usuario.nome}
                        /*onChange={(e) => setNovoInventario(e.target.value.toString().trim())}*/
                        onChange={(e) => {
                            setNovoUsuario({
                                ...usuario,
                                nome: e.target.value.toString()
                            });
                        }}
                        type="text"
                        autoComplete="off"
                    />
                </div>
            
                <div className="buttonGroup mt1 end">
                    <button id="btnIncNewUser" className="button quarter primary" onClick={criaNovoUsuario}>
                        Salvar
                    </button>
                </div>
            
            </div>
        </>
    );
};

export default NovoUsuario;