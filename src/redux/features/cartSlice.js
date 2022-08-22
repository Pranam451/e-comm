import { createSlice, current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeCartItem: (state, action) => {
      const itemId = action.payload;
      const currentState = state.cart;
      const removeItem = currentState.filter(
        (product) => product.id !== itemId
      );
      state.cart = removeItem;
    },
    incrementQty: (state, action) => {
      const item = action.payload.id;
      const selected = state.cart.findIndex((product) => product.id === item);
      const prod = state.cart[selected];

      if (selected >= 0) {
        prod.qty = prod.qty + 1;
        prod.Newprice = prod.price * prod.qty;
      }
      state.cart[selected] = current(prod);
      console.log(state.cart[selected]);
    },
    decrementQty: (state, action) => {
      const item = action.payload.id;
      const selected = state.cart.findIndex((product) => product.id === item);
      const prod = state.cart[selected];

      if (selected >= 0) {
        prod.qty = prod.qty - 1;
        if (prod.qty >= 1) {
          prod.Newprice = prod.price * prod.qty;
        } else {
          const itemId = prod.id;
          const currentState = state.cart;
          const removeItem = currentState.filter(
            (product) => product.id !== itemId
          );
          state.cart = removeItem;
        }
      }
    },
  },
});
export const { addToCart, removeCartItem, decrementQty, incrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
