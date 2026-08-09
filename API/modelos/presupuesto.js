import mongoose from "mongoose";

const presupuestoSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    email: String,
    telefono: String,
    direccionObra: String,
    servicio: String,
    metrosCuadrados: Number,
    descripcion: String,

    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuarios"
    },
    
    estado: {
        type: String,
        default: "pendiente"
    },

});

export default mongoose.model(
    "presupuestos",
    presupuestoSchema
);