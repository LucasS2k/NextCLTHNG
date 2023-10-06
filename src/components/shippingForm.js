import { InputStyled } from "../styles/FormStyles";
import { LoginStyled } from "../styles/LoginStyles";
import React, { useState } from "react";

const ShippingForm = () => {
  const [code, setCode] = useState("");
  const [shippingValue, setShippingValue] = useState(0);

  const getShippingCost = (valor) => {
    switch (true) {
      case valor >= 1 && valor <= 1500:
        setShippingValue("$300");
        break;
      case valor <= 3000:
        setShippingValue("$400");
        break;
      case valor <= 5000:
        setShippingValue("$600");
        break;
      case valor <= 7000:
        setShippingValue("$800");
        break;
      case valor <= 9000:
        setShippingValue("$1000");
        break;
      case valor <= 9999:
        setShippingValue("$1200");
        break;
      default:
        setShippingValue("Código no válido");
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const valor = parseInt(code);
    if (valor >= 1 && valor < 10000) {
      getShippingCost(valor);
    } else {
      setShippingValue("Código no válido");
    }
  };

  return (
    <LoginStyled onSubmit={handleSubmit}>
      <div className="formulario">
        <label>Ingrese su código postal:</label>
        <InputStyled
          type="number"
          placeholder="Ingrese su código postal"
          id="code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button type="submit" className="submitbutton">
          Calcular envío
        </button>
        <span>Costo de envío: {shippingValue}</span>
      </div>
    </LoginStyled>
  );
};

export default ShippingForm;
