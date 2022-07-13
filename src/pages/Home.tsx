import Categorias from "../components/Categorias";
import Productos from "../components/Productos";

const Home = () => {
  return (
    <>
      <Categorias />

      <section>
        <div>
          <h2>Sobre Nosotros</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            libero illum magnam consequuntur repellendus nihil magni saepe?
            Fugit porro quibusdam, corporis asperiores incidunt quidem eum
            repudiandae nostrum debitis nesciunt blanditiis?
          </p>
        </div>
      </section>

      <main>
        <h2>Nuestros Productos</h2>
        <Productos />
      </main>
    </>
  );
};
export default Home;
