import mongoose from "mongoose";

const servicioObraSchema = new mongoose.Schema({

    nombre: String,

    descripcion: String,

    imagen: String

});

export default mongoose.model(
    "serviciosObra",
    servicioObraSchema
);