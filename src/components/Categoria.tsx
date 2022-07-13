import { Link } from "react-router-dom";

interface Categoria {
  categoriaImg: string;
  name: string;
}

const Categoria = ({ categoriaImg, name }: Categoria) => {
  return (
    <div className="categoria">
      <img src={categoriaImg} alt="Imagen Categoria" />
      <Link to="#" className="link">
        {name}
      </Link>
    </div>
  );
};
export default Categoria;
