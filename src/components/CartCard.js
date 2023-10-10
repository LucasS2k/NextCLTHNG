import React from "react";
import { CartCardStyled } from "../styles/CartCardStyles";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cart/cartSlice";
const CartCard = ({ quantity, nombre, productImage, precio, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <CartCardStyled>
        <div>{quantity}x</div> <div>{nombre}</div> <div>${precio}</div>
        <img src={productImage} className="imageInCart" alt={nombre} />
        <div onClick={() => dispatch(removeFromCart(id))}>
          <i className="trashCan fa-solid fa-trash"></i>
        </div>
      </CartCardStyled>
      <div className="lineagris"></div>
    </>
  );
};

export default CartCard;
