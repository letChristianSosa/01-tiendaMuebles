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
        <p>${precio}</p>

        <button>Agregar al Carrito</button>
      </div>
    </div>
  );
};
export default Producto;
