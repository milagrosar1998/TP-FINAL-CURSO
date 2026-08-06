import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./rutas/index.js";

dotenv.config();

console.log("URI encontrada:", !!process.env.MONGODB_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB conectado correctamente");

        app.listen(process.env.PORT, () => {
            console.log(`Servidor funcionando en http://localhost:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log("Error al conectar con MongoDB:", error);
    });