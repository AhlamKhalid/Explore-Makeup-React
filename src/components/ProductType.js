import React from "react";

function ProductType({ checkedProducts, setCheckedProducts }) {
  // check & uncheck product types
  const handleChange = (event) => {
    let newCheckedProducts = [];
    // which product type is clicked
    const productType = event.target.value;
    // state: checked or unchecked
    const isChecked = event.target.checked;

    if (isChecked) {
      // add product type, in case of checking
      newCheckedProducts = [...checkedProducts, productType];
    } else {
      // remove clicked product type, in case of unchecking
      newCheckedProducts = checkedProducts.filter((checkedProduct) => {
        return checkedProduct !== productType;
      });
    }

    setCheckedProducts(newCheckedProducts);
  };

  return (
    <>
      <div className="flex-container">
        <h4 className="filter-header">product</h4>
        {/* onClick: clear checked products */}
        <button
          className="clear-filter"
          onClick={() => {
            setCheckedProducts([]);
          }}
        >
          clear
        </button>
      </div>
      {/* product types */}
      <label className="custom-container flex-container">
        {/* product type is checked if it is included in checked products array */}
        <input
          type="checkbox"
          id="blush"
          name="product-type"
          value="blush"
          checked={checkedProducts.includes("blush")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">blush</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="bronzer"
          name="product-type"
          value="bronzer"
          checked={checkedProducts.includes("bronzer")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">bronzer</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="eyebrow"
          name="product-type"
          value="eyebrow"
          checked={checkedProducts.includes("eyebrow")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">eyebrow</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="eyeliner"
          name="product-type"
          value="eyeliner"
          checked={checkedProducts.includes("eyeliner")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">eyeliner</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="eyeshadow"
          name="product-type"
          value="eyeshadow"
          checked={checkedProducts.includes("eyeshadow")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">eyeshadow</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="foundation"
          name="product-type"
          value="foundation"
          checked={checkedProducts.includes("foundation")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">foundation</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="lipliner"
          name="product-type"
          value="lipliner"
          checked={checkedProducts.includes("lipliner")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">lipliner</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="lipstick"
          name="product-type"
          value="lipstick"
          checked={checkedProducts.includes("lipstick")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">lipstick</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="mascara"
          name="product-type"
          value="mascara"
          checked={checkedProducts.includes("mascara")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">mascara</span>
        <span className="checkmark"></span>
      </label>
      <label className="custom-container flex-container">
        <input
          type="checkbox"
          id="nail-polish"
          name="product-type"
          value="nail_polish"
          checked={checkedProducts.includes("nail_polish")}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">nail polish</span>
        <span className="checkmark"></span>
      </label>
    </>
  );
}

export default ProductType;
