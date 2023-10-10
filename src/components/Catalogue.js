import { CatalogueStyled } from "../styles/CatalogueStyles";
import { stockProductos } from "../assets/img/data/data";
import ProductsList from "./ProductsList";
import { ButtonCategory } from "./ButtonCategory";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Catalogue = () => {
  const [categories, setCategories] = useState(["Todos"]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://next-api-taupe.vercel.app/products/all"
        );
        console.log(response.data.products);
        const data = response.data.products;
        const allCategories = [
          "Todos",
          ...new Set(data.map((article) => article.category)),
        ];

        setCategories(allCategories);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error getting data", error);
      }
    }

    fetchData();
  }, []);

  const filterCategory = (category) => {
    if (category === "Todos") {
      setProducts(products);
    } else {
      const filteredData = products.filter(
        (product) => product.category === category
      );
      setProducts(filteredData);
    }
  };

  return (
    <CatalogueStyled>
      <h2 className="subtitle">Catálogo</h2>
      <div className="linea"></div>
      <div className="categories">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ButtonCategory
            categories={categories}
            filterCategory={filterCategory}
          />
        )}
      </div>
      <div className="productContainer">
        <ProductsList products={products} />
      </div>
    </CatalogueStyled>
  );
};

export default Catalogue;
