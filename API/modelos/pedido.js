import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({

    usuario: String,
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },

    productos: Array,
    total: Number,
    estado: {
        type: String,
        default: "pendiente"
    }

});

export default mongoose.model(
    "pedidos",
    pedidoSchema
);