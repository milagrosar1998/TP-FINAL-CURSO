import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "./carritoSlice";



//el store es donde redux guarda el estado global
export const store = configureStore({
  reducer: {
    carrito: carritoReducer,
  },
});