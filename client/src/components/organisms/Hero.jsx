import { Link } from "react-router-dom";
import obra1 from "../../assets/img/obra1.png";
import obra2 from "../../assets/img/obra2.png";
import obra3 from "../../assets/img/obra3.png";

export default function Hero() {

    return (

        <section className="hero">

            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={obra1} className="d-block w-100" alt="Trabajo de construcción en seco" />
                        <div className="carousel-caption">

                            <h1>S MULTIPRO</h1>

                            <h3>Tus ideas, nuestros proyectos.</h3>

                            <p>  Construcción en seco, remodelaciones, electricidad,
                                pintura y soluciones integrales para hogares,
                                empresas y obras de cualquier escala.</p>
                            <div className="hero-buttons">
                                <Link to="/presupuesto">
                                    <button>Solicitar presupuesto</button>
                                </Link>

                                <Link to="/productos">
                                    <button>Ver productos</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={obra2} className="d-block w-100" alt="Remodelaciones" />
                        <div className="carousel-caption">

                            <h1>S MULTIPRO</h1>

                            <h3>Tus ideas, nuestros proyectos.</h3>

                            <p>  Construcción en seco, remodelaciones, electricidad,
                                pintura y soluciones integrales para hogares,
                                empresas y obras de cualquier escala.</p>

                            <div className="hero-buttons">
                                <Link to="/presupuesto">
                                    <button>Solicitar presupuesto</button>
                                </Link>

                                <Link to="/productos">
                                    <button>Ver productos</button>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <img src={obra3} className="d-block w-100" alt="Reparaciones" />
                        <div className="carousel-caption">

                            <h1>S MULTIPRO</h1>

                            <h3>Tus ideas, nuestros proyectos.</h3>

                            <p>  Construcción en seco, remodelaciones, electricidad,
                                pintura y soluciones integrales para hogares,
                                empresas y obras de cualquier escala.</p>
                            <div className="hero-buttons">
                                <Link to="/presupuesto">
                                    <button>Solicitar presupuesto</button>
                                </Link>

                                <Link to="/productos">
                                    <button>Ver productos</button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>



        </section >
    );
}