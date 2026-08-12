import multer from "multer";

const almacenamiento = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "imagenes/productos");
  },//guarda aca las imagenes

  filename: function (req, file, cb) {
    const nombreUnico = Date.now() + "-" + file.originalname;
//evita que dos imagens con el mismo nombre se pisen
    cb(null, nombreUnico);
  },
});

const subirImagenProducto = multer({
  storage: almacenamiento,
});

export default subirImagenProducto;