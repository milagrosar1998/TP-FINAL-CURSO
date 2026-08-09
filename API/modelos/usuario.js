import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({

    nombre: String,
    apellido: String,
    email: String,
    password: String,
    telefono: String,
    direccion: String,
    ciudad: String,
    provincia: String,
    
    rol: {
        type: String,
        default: "usuario"
    }
});

export default mongoose.model(
    "usuarios", usuarioSchema
);