import Categorias from "../components/Categorias";
import Productos from "../components/Productos";
import imgNosotros from "../img/nosotros.jpg";

const Home = () => {
  return (
    <>
      <Categorias />

      <section
        className="sobre-nosotros"
        style={{
          backgroundImage: `linear-gradient(to right, transparent 50%, #037bc0 50%, #037bc0 100%), url(${imgNosotros})`,
        }}
      >
        <div className="contenedor sobre-nosotros-grid">
          <div className="texto-nosotros">
            <h2>Sobre Nosotros</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              libero illum magnam consequuntur repellendus nihil magni saepe?
              Fugit porro quibusdam, corporis asperiores incidunt quidem eum
              repudiandae nostrum debitis nesciunt blanditiis?
            </p>
          </div>
        </div>
      </section>

      <main className="contenido-principal contenedor">
        <h2 className="text-center">Nuestros Productos</h2>
        <Productos />
      </main>
    </>
  );
};
export default Home;
