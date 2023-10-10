import React from "react";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
const ProductCard = ({
  id,
  nombre,
  precio,
  productImage,
  category,
  cantidad,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="item">
      <img src={productImage} alt={nombre} />
      <div className="itemdescription">
        <p>{nombre}</p>
      </div>
      <div className="itemfoot">
        <span className="valor">${precio}</span>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id,
                nombre,
                precio,
                productImage,
                category,
                cantidad,
              })
            )
          }
          className="boton-agregar"
          data-id={id}
          data-name={nombre}
          data-category={category}
          data-value={precio}
          data-img={productImage}
          data-quantity={cantidad}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
