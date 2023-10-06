import React from "react";
import { HelpSectionStyled } from "../styles/HelpSectionStyles";
const HelpSection = () => {
  return (
    <HelpSectionStyled>
      <div>
        ¿Nesecitas ayuda? Contactanos:
        <div className="input">
          <label htmlFor="ingresaremail">Email</label>
          <input
            type="email"
            placeholder="Ingrese su email"
            id="ingresaremail"
          />
        </div>
        <div className="input">
          <label htmlFor="consulta">Motivo de consulta</label>
          <input
            type="text"
            placeholder="Ingrese su consulta"
            id="consulta"
            name="contraseña"
          />
        </div>
        <input type="submit" className="submitbutton" />
        <a href="https://github.com/">Preguntas Frecuentes</a>
      </div>
    </HelpSectionStyled>
  );
};

export default HelpSection;
