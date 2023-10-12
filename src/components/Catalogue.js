import { CatalogueStyled } from "../styles/CatalogueStyles";
import ProductsList from "./ProductsList";
import { ButtonCategory } from "./ButtonCategory";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";

const Catalogue = () => {
  const [categories, setCategories] = useState(["Todos"]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [originalProducts, setOriginalProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://next-api-taupe.vercel.app/products/all"
        );
        const data = response.data.products;
        const allCategories = [
          "Todos",
          ...new Set(data.map((article) => article.category)),
        ];

        setCategories(allCategories);
        setProducts(data);
        setOriginalProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error getting data", error);
      }
    }

    fetchData();
  }, []);

  const filterCategory = (category) => {
    if (category === "Todos") {
      setProducts(originalProducts);
    } else {
      const filteredData = originalProducts.filter(
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
          Array.from({ length: 14 }, (_, index) => <SkeletonCard key={index} />)
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
