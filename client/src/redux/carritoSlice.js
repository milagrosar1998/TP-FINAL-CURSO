import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "carrito", 
  //crea una parte del estado global llamado carrito

  initialState: {
    productos: [],
  },//empieza el carrito vacio

  reducers: {
    agregarProducto: (state, action) => {
      state.productos.push(action.payload);
    },

    eliminarProducto: (state, action) => {
      state.productos.splice(action.payload, 1);
    },

    vaciarCarrito: (state) => {
      state.productos = [];
    },
  },
});

export const {
  agregarProducto,
  eliminarProducto,
  vaciarCarrito,
} = carritoSlice.actions;

export default carritoSlice.reducer;



