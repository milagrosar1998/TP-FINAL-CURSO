import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({

  name: "carrito",

  initialState: {
    productos: [],
  },

  reducers: {

    agregarProducto: (state, action) => {

      const productoNuevo = action.payload;

      // Buscamos si ese producto ya está en el carrito
      const productoExistente = state.productos.find(
        (producto) => producto.id === productoNuevo.id
      );

      // Si ya existe, sumamos la cantidad
      if (productoExistente) {

        productoExistente.cantidad += productoNuevo.cantidad;

      } else {

        // Si no existe, lo agregamos
        state.productos.push(productoNuevo);

      }

    },


    aumentarCantidad: (state, action) => {

      const producto = state.productos.find(
        (producto) => producto.id === action.payload
      );

      if (producto) {
        producto.cantidad += 1;
      }

    },


    disminuirCantidad: (state, action) => {

      const producto = state.productos.find(
        (producto) => producto.id === action.payload
      );

      if (producto && producto.cantidad > 1) {
        producto.cantidad -= 1;
      }

    },


    eliminarProducto: (state, action) => {

      state.productos = state.productos.filter(
        (producto) => producto.id !== action.payload
      );

    },


    vaciarCarrito: (state) => {

      state.productos = [];

    },

  },

});


export const {
  agregarProducto,
  aumentarCantidad,
  disminuirCantidad,
  eliminarProducto,
  vaciarCarrito,
} = carritoSlice.actions;


export default carritoSlice.reducer;