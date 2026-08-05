import Hero from "../organisms/Hero";
import ServiciosHome from "../organisms/ServiciosHome";
import ProductosHome from "../organisms/ProductosHome";
import NosotrosHome from "../organisms/NosotrosHome";
import ObrasHome from "../organisms/ObrasHome";
import ContactoHome from "../organisms/ContactoHome";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiciosHome />
      <ProductosHome />
      <NosotrosHome />
      <ObrasHome />
      <ContactoHome />
    </>
  );
}