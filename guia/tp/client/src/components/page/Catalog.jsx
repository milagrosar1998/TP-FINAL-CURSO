import { useState } from "react";
import { Heading } from "../atoms";
import { ProductCard } from "../molecules";
import { products } from "../../data/products";

export default function Catalog() {
  const [Catproducts, setCatproducts] = useState(products);

  return (
    <section>
      {Catproducts.length ? (
        Catproducts.map((product) => (
          <ProductCard
            title={product.title}
            imgSource={product.imgSource}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <Heading text="Loading" size="h3" />
      )}
    </section>
  );
}
