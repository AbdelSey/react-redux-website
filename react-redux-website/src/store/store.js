import { configureStore } from "@reduxjs/toolkit";
import navBarReducer from "../features/navbar/navBarSlice";

export const store = configureStore({
  reducer: {
    navBar: navBarReducer,
  },
});
