import { OrderCardStyled } from "../styles/OrderCardStyles";
const OrderCard = ({ createdAt, items, price, shippingCost, _id }) => {
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
  return (
    <OrderCardStyled key={_id}>
      <span>Productos:{totalQuantity}</span>
      <span>{formattedDate}</span>
      <span>Total: ${price}</span>
      <span>Costo de envio: ${shippingCost}</span>
    </OrderCardStyled>
  );
};
export default OrderCard;
