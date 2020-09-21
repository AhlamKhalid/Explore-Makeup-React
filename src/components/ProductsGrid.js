import React from "react";
import Product from "./Product";

function ProductsGrid({ products }) {
  // check if products is populated
  return products.length > 0 ? (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  ) : (
    // if no products match the filters
    <div className="products">
      <div className="expandable-container">
        <h4>
          No products match the filters, try others & <br /> don't leave us.
          <i>We LOVE ya!</i>
        </h4>
        <div className="face">
          <div className="eye eye-left">
            <div className="white-dot"></div>
          </div>
          <div className="eye eye-right">
            <div className="white-dot"></div>
          </div>
          <div className="mouth"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductsGrid;
