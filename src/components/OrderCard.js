import { OrderCardStyled } from "../styles/OrderCardStyles";
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
      <span>Productos: {totalQuantity}</span>
      <span>{formattedDate}</span>
      <span>Total: ${price}</span>
      <span>Costo de envío: ${shippingCost}</span>

      {showItems && (
        <div>
          {items.map((item, index) => (
            <div key={item._id}>
              <span>{item.nombre}</span>
              <span>Cantidad: {item.quantity}</span>
              <span>Precio: ${item.precio}</span>
            </div>
          ))}
        </div>
      )}

      <button onClick={toggleItems}>
        {showItems ? "Ocultar detalles" : "Mostrar detalles"}
      </button>
    </OrderCardStyled>
  );
};

export default OrderCard;
