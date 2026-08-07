import { Link } from "react-router-dom";




export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>S MULTIPRO</h1>

                <h3>Tus ideas, nuestros proyectos.</h3>

                <p>
                    Construcción en seco, remodelaciones, electricidad,
                    pintura y soluciones integrales para hogares,
                    empresas y obras de cualquier escala.
                </p>

                <div className="hero-buttons">

                    <Link to="/presupuesto">
                        <button>Solicitar presupuesto</button>
                    </Link>

                    <Link to="/productos">
                        <button>Ver productos</button>
                    </Link>

                </div>
            </div>


        </section >
    );
}