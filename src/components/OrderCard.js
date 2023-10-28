import {
  OrderCardStyled,
  OrderDescription,
  StyledItems,
  ShowMore,
  ItemContainer,
} from "../styles/OrderCardStyles";
import { useState } from "react";

const OrderCard = ({ createdAt, items, price, shippingCost, _id }) => {
  const [showItems, setShowItems] = useState(false);

  const totalQuantity = items
    ? items.reduce((total, item) => total + item.quantity, 0)
    : 0;
  const formattedDate = new Date(createdAt).toLocaleString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <OrderCardStyled key={_id}>
      <OrderDescription>
        <span>Productos: {totalQuantity}</span>
        <span>{formattedDate}</span>
        <span>Total: ${price}</span>
        <span>Costo de envío: ${shippingCost}</span>
      </OrderDescription>

      {showItems && (
        <ItemContainer>
          <div className="purpleLine"></div>
          {items.map((item, index) => (
            <StyledItems key={item._id}>
              <span>{item.nombre}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Valor: ${item.precio}</span>
            </StyledItems>
          ))}
        </ItemContainer>
      )}

      <ShowMore onClick={toggleItems}>
        {showItems ? "Ocultar detalles" : "Mostrar detalles"}
      </ShowMore>
    </OrderCardStyled>
  );
};

export default OrderCard;
