
import { products } from "../../data/products";
import { ProductCard } from "../molecules";

import { useState } from "react";


export default function Productos() {



  const [busqueda, setBusqueda] = useState("");
  //guarda lo que escribe el usuario

  const productosFiltrados = products.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );
  //tiene los productos q coinciden con la busqueda
  //busca en nombre y en descripcion
  //toLowerCase no i,porta si escribis en mayuscula o minuscula
  //includes() si lo que escribe contiene alguna palabra 


  return (
    <section>
      <h1>Catálogo de productos</h1>

      <p>
        Encontrá materiales e insumos para construcción en seco,
        remodelaciones y terminaciones.
      </p>


      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />





      {productosFiltrados.map((producto) => (
        <ProductCard
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
         
        />

      ))
      }



    </section>
  );

}