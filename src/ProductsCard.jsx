import React from "react";

const ProductsCard = ({ product }) => {
  console.log(product);
  return (
    <div className="py-4 my-3 border border-secondary shadow rounded rounded-5">
      {/* <img src={product.volumeInfo.imageLinks.smallThumbnail} alt="img" /> */}
      <h3>{product.volumeInfo.title}</h3>
      <p>Author: {product.volumeInfo.authors}</p>
      <p>{product.volumeInfo.description}</p>
    </div>
  );
};

export default ProductsCard;
