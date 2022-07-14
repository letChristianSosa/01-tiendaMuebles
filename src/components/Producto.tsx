interface Producto {
  productoImg: string;
  precio: string;
}

const Producto = ({ productoImg, precio }: Producto) => {
  return (
    <div className="producto">
      <img src={productoImg} alt="Imagen Producto" />
      <div className="texto-producto">
        <h3>Producto </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p className="precio">${precio}</p>

        <a className="btn">Agregar al Carrito</a>
      </div>
    </div>
  );
};
export default Producto;
