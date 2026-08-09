import Producto from "../../modelos/productoSchema.js";

const crearProducto = async (data) => { // data representa los datos que tiene el producto, recibe info desde prodc¿uctoControl
    const producto = await Producto.create(data); //Creá un documento con estos datos en la colección productos

    return producto; // 
};

export default crearProducto;

// no creamos esto directamente en controlador porq estamos separando responsabilidades