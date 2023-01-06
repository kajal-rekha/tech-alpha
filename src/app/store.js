import { configureStore } from "@reduxjs/toolkit";

import productsReducer, {
  productsFetching,
} from "../features/products/productSlice";
import cartReducer from "../features/products/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetching());
