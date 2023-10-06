import React from "react";
import Shipping from "../assets/img/shipping.png";
import ShippingForm from "./shippingForm";
import CreditCard from "../assets/img/creditcard.png";
import { BenefitStyled } from "../styles/BenefitsStyles";
import PayMethods from "./PayMethods";
import { useState } from "react";
const Benefits = () => {
  const [showElement1, setShowElement1] = useState(false);
  const [showElement2, setShowElement2] = useState(false);

  const toggleElement = (elementNumber) => {
    switch (elementNumber) {
      case 1:
        setShowElement1(!showElement1);
        setShowElement2(false);
        break;
      case 2:
        setShowElement2(!showElement2);
        setShowElement1(false);
        break;
      default:
        break;
    }
  };
  return (
    <BenefitStyled>
      <div className="beneficios">
        <div className="benefitem" onClick={() => toggleElement(1)}>
          <img src={Shipping} alt="" className="benefitemImage"></img>
          <span>Consultar envío</span>
        </div>
        <div className="benefitem" onClick={() => toggleElement(2)}>
          <img src={CreditCard} alt="" className="benefitemImage"></img>
          <span>Medios de pago</span>
        </div>
      </div>
      <div>
        {showElement1 && <ShippingForm />}
        <div className="beneficios">{showElement2 && <PayMethods />}</div>
      </div>
    </BenefitStyled>
  );
};

export default Benefits;
