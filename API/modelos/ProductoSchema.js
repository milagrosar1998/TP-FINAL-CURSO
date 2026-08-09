import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({ // lo que haria es definir PRODUCTO

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

export default mongoose.model(
    "productos",
    productoSchema
);