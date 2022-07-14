import { Link } from "react-router-dom";
import mainImg from "../img/principal.jpg";

const Header = () => {
  return (
    <>
      <header>
        <h1 className="nombre-sitio text-center">
          Tienda <span>Muebles</span>
        </h1>
      </header>

      <div className="contenedor-navegacion">
        <nav className="navegacion-principal contenedor">
          <Link to="/">Inicio</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/galeria">Galeria</Link>
          <Link to="contacto">Contacto</Link>
        </nav>
      </div>

      <div
        className="hero"
        style={{ backgroundImage: `url(${mainImg})` }}
      ></div>
    </>
  );
};

export default Header;
