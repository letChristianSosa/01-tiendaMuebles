import Categoria from "../components/Categoria";
import categoriaImg1 from "../img/categoria1.jpg";
import categoriaImg2 from "../img/categoria2.jpg";
import categoriaImg3 from "../img/categoria3.jpg";

const Categorias = () => {
  return (
    <section className="contenedor categorias">
      <h2>
        Categorias de <span>Productos</span>
      </h2>
      <div className="listado-categorias">
        <Categoria categoriaImg={categoriaImg1} name="Oficina" />
        <Categoria categoriaImg={categoriaImg2} name="Hogar" />
        <Categoria categoriaImg={categoriaImg3} name="Cocina" />
      </div>
    </section>
  );
};
export default Categorias;
