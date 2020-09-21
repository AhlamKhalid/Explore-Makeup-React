import React from "react";

function Product({ product }) {
  return (
    <div className="card">
      <img src={product.api_featured_image} alt={product.name} />
      <h3 className="price">
        <span className="dollar-sign">$</span>
        {product.price}
      </h3>
      <h2 className="name">{product.name}</h2>
      <div className="type-wrapper">
        <h4 className="product-type">{product.product_type}</h4>
      </div>
    </div>
  );
}

export default Product;
