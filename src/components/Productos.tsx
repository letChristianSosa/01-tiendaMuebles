import Producto from "./Producto";
import productoImg1 from "../img/producto1.jpg";
import productoImg2 from "../img/producto2.jpg";
import productoImg3 from "../img/producto3.jpg";
import productoImg4 from "../img/producto4.jpg";
import productoImg5 from "../img/producto5.jpg";
import productoImg6 from "../img/producto6.jpg";

const Productos = () => {
  return (
    <div>
      <Producto productoImg={productoImg1} precio="1,000.00" />
      <Producto productoImg={productoImg2} precio="1,000.00" />
      <Producto productoImg={productoImg3} precio="1,000.00" />
      <Producto productoImg={productoImg4} precio="1,000.00" />
      <Producto productoImg={productoImg5} precio="1,000.00" />
      <Producto productoImg={productoImg6} precio="1,000.00" />
    </div>
  );
};
export default Productos;
