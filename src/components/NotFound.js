import React from "react";
import { LoginStyled } from "../styles/LoginStyles";
const NotFound = () => {
  return (
    <>
      <LoginStyled>
        <div className="formulario">
          <div>404 </div>
          <div>
            Se supone que no deberia estar aquí, está siendo redireccionado
          </div>
        </div>
      </LoginStyled>
    </>
  );
};

export default NotFound;
