import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice";
import Modal from "./Modal";

const ProductCard = ({
  id,
  nombre,
  precio,
  productImage,
  category,
  cantidad,
}) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dynamicMessage = "Producto agregado al carrito!";

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        nombre,
        precio,
        productImage,
        category,
        cantidad,
      })
    );
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 2000);
  };

  return (
    <div className="item">
      <img src={productImage} alt={nombre} />
      <div className="itemdescription">
        <p>{nombre}</p>
      </div>
      <div className="itemfoot">
        <span className="valor">${precio}</span>
        <button
          onClick={handleAddToCart}
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

      {isModalVisible && <Modal message={dynamicMessage} />}
    </div>
  );
};

export default ProductCard;
