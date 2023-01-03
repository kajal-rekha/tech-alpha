import { configureStore } from "@reduxjs/toolkit";

import productsReducer, {
  productsFetching,
} from "../features/products/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

store.dispatch(productsFetching());
