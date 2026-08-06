import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({ // lo que haria es definir PRODUCTO

nombre: String,
precio: Number,
descripcion: String,
imagen: String

});

export default mongoose.model(
 "productos", 
 productoSchema
);