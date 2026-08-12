
//import { products } from "../../data/products";
import { ProductCard } from "../molecules";

//bk
import { useEffect, useState } from "react";
import api from "../../services/api";


export default function Productos() {



  const [busqueda, setBusqueda] = useState("");
  //guarda lo que escribe el usuario
  const [productos, setProductos] = useState([]);

  async function cargarProductos() {
    try {
      const respuesta = await api.get("/productos");
      //pide los productos
      setProductos(respuesta.data);
    } catch (error) {
      console.log(error);
    }
  }//trae los productos de api



  useEffect(() => {
    cargarProductos();
  }, []);

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );
  //tiene los productos q coinciden con la busqueda
  //busca en nombre y en descripcion
  //toLowerCase no i,porta si escribis en mayuscula o minuscula
  //includes() si lo que escribe contiene alguna palabra 


  return (
    <main className="productos-page">
      <section className="productos-header">
        <h1>Catálogo de productos</h1>

        <p>
          Encontrá materiales e insumos para construcción en seco,
          remodelaciones y terminaciones.
        </p>


        <input
          className="productos-buscador"
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />


      </section>

      <section className="productos-grid">
        {productosFiltrados.map((producto) => (
          <ProductCard
            key={producto._id}
            id={producto._id}
            nombre={producto.nombre}
            descripcion={producto.descripcion}
            precio={producto.precio}
            imagen={producto.imagen}

          />

        ))
        }

      </section>
    </main>
  );
}