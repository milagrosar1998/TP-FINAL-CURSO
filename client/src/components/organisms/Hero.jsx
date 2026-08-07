import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero">
            
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/" className="d-block w-100" alt="Trabajo de construcción en seco" />
                            <div className="carousel-caption">

                                <h1>S MULTIPRO</h1>

                                <h3>Tus ideas, nuestros proyectos.</h3>

                                <p>  Construcción en seco, remodelaciones, electricidad,
                                    pintura y soluciones integrales para hogares,
                                    empresas y obras de cualquier escala.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="Remodelaciones" />
                            <div className="carousel-caption">

                                <h1>S MULTIPRO</h1>

                                <h3>Tus ideas, nuestros proyectos.</h3>

                                <p>  Construcción en seco, remodelaciones, electricidad,
                                    pintura y soluciones integrales para hogares,
                                    empresas y obras de cualquier escala.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="Reparaciones" />
                            <div className="carousel-caption">

                                <h1>S MULTIPRO</h1>

                                <h3>Tus ideas, nuestros proyectos.</h3>

                                <p>  Construcción en seco, remodelaciones, electricidad,
                                    pintura y soluciones integrales para hogares,
                                    empresas y obras de cualquier escala.</p>
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

                <div className="hero-buttons">

                    <Link to="/presupuesto">
                        <button>Solicitar presupuesto</button>
                    </Link>

                    <Link to="/productos">
                        <button>Ver productos</button>
                    </Link>

                </div>
          

        </section >
    );
}