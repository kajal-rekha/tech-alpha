import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // check if the item is already in the cart
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // if exist
      if (existedItemIndex >= 0) {
        // increase quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);
      }
      // add to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = updatedCartItems;
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    clearCart(state, action) {
      state.cartItems = [];
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      //if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = updatedCartItems;
      }
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
