import React from "react";
import { FormStyled } from "../styles/FormStyles";
import { LoginStyled } from "../styles/LoginStyles";
const NotFound = () => {
  return (
    <>
      <LoginStyled>
        <FormStyled>
          <div>404 </div>
          <div>
            Se supone que no deberia estar aquí, está siendo redireccionado
          </div>
        </FormStyled>
      </LoginStyled>
    </>
  );
};

export default NotFound;
