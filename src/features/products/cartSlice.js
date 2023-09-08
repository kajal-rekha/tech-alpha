import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],

  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart
    addToCart(state, action) {
      const existedItemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      // if exist
      if (existedItemIndex >= 0) {
        // increase quantity
        state.cartItems[existedItemIndex].cartQuantity += 1;

        //React Toastify added
        toast.info("Quantity increased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        // add to cart
        const assembledItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(assembledItem);

        //React Toastify added
        toast.success("Product added into cart!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      // add to local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // remove from cart
    removeFromCart(state, action) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = updatedCartItems;

      //React Toastify added
      toast.warn("Product removed from cart!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // clear cart
    clearCart(state, action) {
      state.cartItems = [];

      //React Toastify added
      toast.error("Cart cleared!", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // decrease cart
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      //if exist
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        //React Toastify added
        toast.info("Quantity decreased!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = updatedCartItems;

        //React Toastify added
        toast.warn("Product removed from cart!", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      // update local storage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // get subtotal
    getSubtotal(state, action) {
      const Subtotal = state.cartItems.reduce((acc, item) => {
        const { price, cartQuantity } = item;
        const itemTotal = price * cartQuantity;
        acc += itemTotal;

        return acc;
      }, 0);

      state.cartTotalAmount = Subtotal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  decreaseCart,
  getSubtotal,
} = cartSlice.actions;
export default cartSlice.reducer;
