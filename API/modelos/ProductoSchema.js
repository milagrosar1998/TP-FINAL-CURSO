import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({

    nombre: String,
    precio: Number,
    descripcion: String,
    imagen: String,
    stock: Number,
    categoria: String,

    vendedorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },

});

const Producto =
    mongoose.models.productos ||
    mongoose.model("productos", productoSchema);

export default Producto;