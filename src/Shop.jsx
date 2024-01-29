import React from "react";
import ProductsCard from "./ProductsCard";

const Shop = ({ products }) => {
  return (
    <div>
      <div>
        {products.map((item) => (
          <ProductsCard product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
