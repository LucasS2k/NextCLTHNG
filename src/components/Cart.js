import React from "react";
import { CartStyled } from "../styles/CartStyles";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../redux/user/userSlice";
import {
  clearCart,
  finishBuying,
  toggleHiddenCart,
} from "../redux/cart/cartSlice";
import CartCard from "./CartCard";
const Cart = () => {
  const user = useSelector(selectUser);
  console.log(user);
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

  const sendOrderToDB = async (orderData) => {
    try {
      const response = await axios.post(
        "https://next-api-taupe.vercel.app/orders/create",
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            "x-token": user.token,
          },
        }
      );

      console.log(user);

      if (response.status === 200) {
        alert("Su compra está en camino");
        dispatch(clearCart());
      } else {
        alert("Error al enviar la orden");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
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
                onClick={async () => {
                  if (window.confirm("Finalizar compra?")) {
                    const orderData = {
                      createdAt: new Date(),
                      user: user,
                      price: precioTotal,
                      shippingCost: 0,
                      items: cartItems,
                      shippingDetails: {},
                      status: "pending",
                      total: precioTotal,
                    };
                    console.log(orderData);
                    await sendOrderToDB(orderData);
                    finishBuying();
                  }
                }}
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
