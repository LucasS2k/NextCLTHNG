import ProductCard from "./ProductCard";
export const ProductsList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </>
  );
};
export default ProductsList;
