import React from "react";

function Brand({ brand, setBrand }) {
  // change brand
  const handleChange = (event) => {
    const brandValue = event.target.value;
    setBrand(brandValue);
  };

  return (
    <>
      {/* filter by brand  */}
      <h4 className="filter-header">brand</h4>
      {/* brands */}
      {/* brand is checked if it is equal the brand state */}
      <label className="custom-container">
        <input
          type="radio"
          id="nyx"
          name="brand"
          value="nyx"
          checked={brand === "nyx"}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">nyx</span>
      </label>
      <label className="custom-container">
        <input
          type="radio"
          id="loreal"
          name="brand"
          value="l'oreal"
          checked={brand === "l'oreal"}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">l'oreal</span>
      </label>
      <label className="custom-container">
        <input
          type="radio"
          id="smashbox"
          name="brand"
          value="smashbox"
          checked={brand === "smashbox"}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">smashbox</span>
      </label>
      <label className="custom-container">
        <input
          type="radio"
          id="maybelline"
          name="brand"
          value="maybelline"
          checked={brand === "maybelline"}
          onChange={(event) => handleChange(event)}
        />
        <span className="custom-label">maybelline</span>
      </label>
    </>
  );
}

export default Brand;
