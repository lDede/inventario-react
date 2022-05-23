import React from "react";
import { useNavigate } from "react-router-dom";

const RodapeMenuPrincipal = () => {
  const navigate = useNavigate();
  return (
       <div className="footer">
        <button id="btnAdic" className="button button-round button-footer primary" onClick={() => navigate("/new-inventory")}>
          + Novo
        </button>
      </div>
  );
};

export default RodapeMenuPrincipal;
