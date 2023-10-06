import React from "react";
import { CartStyled } from "../styles/CartStyles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  finishBuying,
  toggleHiddenCart,
} from "../redux/cart/cartSlice";
import CartCard from "./CartCard";

const Cart = () => {
  const dispatch = useDispatch();
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const { cartItems } = useSelector((state) => state.cart);
  const precioTotal = cartItems.reduce((acc, item) => {
    return (acc += item.precio * item.quantity);
  }, 0);
  const totalCart = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  return (
    <>
      {!hiddenCart && (
        <CartStyled>
          <div>
            <h3>Carrito</h3>
            <button
              id="carritoCerrar"
              className="carritoCerrar"
              onClick={() => dispatch(toggleHiddenCart())}
            >
              <i className="fas fa-times-circle"></i>
            </button>
            <div id="cartContainer" className="carrito-contenedor">
              {cartItems.length ? (
                cartItems.map((item) => {
                  return <CartCard {...item} key={item.id} />;
                })
              ) : (
                <p>Su carrito está vacío</p>
              )}
            </div>
            <p className="precioProducto">
              <span id="contadorCart">{totalCart}</span> Producto/s en tu
              carrito: $<span id="precioTotal">{precioTotal}</span>
            </p>
            <div className="itemfoot">
              <button
                id="vaciarCarrito"
                className="submitbutton"
                onClick={() => dispatch(clearCart())}
              >
                Vaciar carrito
              </button>
              <button
                id="finalizarCompra"
                className="submitbutton"
                onClick={() => dispatch(finishBuying())}
              >
                Finalizar Compra
              </button>
            </div>
          </div>
        </CartStyled>
      )}
    </>
  );
};

export default Cart;
