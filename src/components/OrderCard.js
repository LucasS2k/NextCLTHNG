import { OrderCardStyled } from "../styles/OrderCardStyles";
const OrderCard = ({ createdAt, items, price, shippingCost, _id }) => {
  return (
    <OrderCardStyled key={_id}>
      <span>${createdAt}</span>
      <span>${price}</span>
      <span>${shippingCost}</span>
      <span>{_id}</span>
      <span></span>
    </OrderCardStyled>
  );
};
export default OrderCard;
