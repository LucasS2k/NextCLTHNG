import { OrderCardStyled } from "../styles/OrderCardStyles";
const OrderCard = ({ createdAt, items, price, shippingCost, _id }) => {
  const totalQuantity = items
    ? items.reduce((total, item) => total + item.quantity, 0)
    : 0;
  return (
    <OrderCardStyled key={_id}>
      <span>Productos: {totalQuantity}</span>
      <span>{createdAt}</span>
      <span>Total: ${price}</span>
      <span>Costo de envio: ${shippingCost}</span>
    </OrderCardStyled>
  );
};
export default OrderCard;
