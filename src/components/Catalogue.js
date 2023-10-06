import { CatalogueStyled } from "../styles/CatalogueStyles";
import { stockProductos } from "../assets/img/data/data";
import { useState } from "react";
import ProductsList from "./ProductsList";
import { ButtonCategory } from "./ButtonCategory";
const Catalogue = () => {
  const allCategories = [
    "Todos",
    ...new Set(stockProductos.map((article) => article.category)),
  ];

  const [categories] = useState(allCategories);
  const [products, setProducts] = useState(stockProductos);

  const filterCategory = (category) => {
    if (category === "Todos") {
      setProducts(stockProductos);
      return;
    }

    const filteredData = stockProductos.filter(
      (product) => product.category === category
    );
    setProducts(filteredData);
  };
  return (
    <CatalogueStyled>
      <h2 className="subtitle">Catálogo</h2>
      <div className="linea"></div>
      <div className="categories">
        <ButtonCategory
          categories={categories}
          filterCategory={filterCategory}
        />
      </div>
      <div className="productContainer">
        <ProductsList products={products} />
      </div>
    </CatalogueStyled>
  );
};
export default Catalogue;
