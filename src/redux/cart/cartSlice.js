import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItem } from "./cartUtils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };
    },
    clearCart: (state) => {
      if (window.confirm("Desea vaciar su carrito?"))
        alert("Su carrito se ha eliminado");
      return {
        ...state,
        cartItems: [],
      };
    },
    toggleHiddenCart: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
    finishBuying: (state) => {
      if (window.confirm("Finalizar compra?")) {
        alert("Su compra está en camino");
        return {
          ...state,
          cartItems: [],
        };
      }
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleHiddenCart,
  finishBuying,
} = cartSlice.actions;
export default cartSlice.reducer;
