import mongoose from "mongoose";

const notificacionSchema = new mongoose.Schema({

    mensaje: String,

    tipo: String,

    leida: {
        type: Boolean,
        default: false
    }

});

export default mongoose.model(
    "notificaciones",
    notificacionSchema
);