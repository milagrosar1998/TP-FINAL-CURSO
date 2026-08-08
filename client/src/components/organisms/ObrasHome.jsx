import obra4 from "../../assets/img/obra4.png";
import obra2 from "../../assets/img/obra2.png";
import obra5 from "../../assets/img/obra5.png";
import obra6 from "../../assets/img/obra6.png";
import obra7 from "../../assets/img/obra7.png";
import obra8 from "../../assets/img/obra8.png";

export default function ObrasHome() {
  return (
  <section className="home-section obras-home">

<h2>Algunos trabajos realizados</h2>

<p className="home-intro">
Conocé algunos de nuestros proyectos realizados para
particulares, empresas y constructoras.
</p>
 <div className="obras-imagenes">
        <img src={obra4} alt="Trabajo realizado por S MULTIPRO" />
        <img src={obra2} alt="Trabajo realizado por S MULTIPRO" />
        <img src={obra5} alt="Trabajo realizado por S MULTIPRO" />
        <img src={obra6} alt="Trabajo realizado por S MULTIPRO" />
        <img src={obra7} alt="Trabajo realizado por S MULTIPRO" />
        <img src={obra8} alt="Trabajo realizado por S MULTIPRO" />
      </div>

</section>
  );
}