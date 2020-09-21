import React from "react";

// destruct passed price slider
function Price({
  priceSlider: {
    minPrice,
    setMinPrice,
    setSelectedMinPrice,
    maxPrice,
    setMaxPrice,
    setSelectedMaxPrice,
    leftPercent,
    setLeftPercent,
    rightPercent,
    setRightPercent,
  },
}) {
  // set minimum price
  const handleMinPrice = (event) => {
    const inputLeft = event.target;
    // get min, max, current value of left slider (slider for minimum price)
    const min = parseInt(inputLeft.min);
    const max = parseInt(inputLeft.max);
    const currentValue = parseInt(inputLeft.value);

    // determine left slider value (prevent min & max price overlapping)
    const value = Math.min(currentValue, maxPrice - 1);

    // set left slider value
    setMinPrice(value);

    // determine left slider percentage
    const percent = ((minPrice - min) / (max - min)) * 100;

    // move left thumb & range's start point
    setLeftPercent(`${percent}%`);
  };

  // set maximum price
  const handleMaxPrice = (event) => {
    const inputRight = event.target;
    // get min & max of right slider (slider for maximum price)
    const min = parseInt(inputRight.min);
    const max = parseInt(inputRight.max);
    const currentValue = parseInt(inputRight.value);

    // determine right slider value (prevent min & max price overlapping)
    const value = Math.max(currentValue, minPrice + 1);

    // set right slider value
    setMaxPrice(value);

    // determine right slider percentage
    const percent = ((maxPrice - min) / (max - min)) * 100;

    // move right thumb & range's end point
    setRightPercent(`${100 - percent}%`);
  };

  // clear price filter
  const clearPrice = () => {
    // clear min price
    setMinPrice(0);
    setSelectedMinPrice(0);
    setLeftPercent("0%");

    // clear max price
    setMaxPrice(60);
    setSelectedMaxPrice(60);
    setRightPercent("0%");
  };
  return (
    <>
      <div className="flex-container extra-mb">
        <h4 className="filter-header">price</h4>
        <button
          className="clear-filter"
          onClick={() => {
            clearPrice();
          }}
        >
          clear
        </button>
      </div>
      <div className="range-container">
        {/* price events: 
        onChange: user is still dragging the slider.
        onKeyUp, onMouseUp: user selected a price. 
        onKeyUp: moving slider with arrow keys.
        onMouseUp: moving slider by dragging.
         */}
        {/* min price input  */}
        <input
          type="range"
          id="input-left"
          min="0"
          max="60"
          value={minPrice}
          onChange={(event) => {
            handleMinPrice(event);
          }}
          onKeyUp={() => {
            setSelectedMinPrice(minPrice);
          }}
          onMouseUp={() => {
            setSelectedMinPrice(minPrice);
          }}
        />
        {/* max price input  */}
        <input
          type="range"
          id="input-right"
          min="0"
          max="60"
          value={maxPrice}
          onChange={(event) => {
            handleMaxPrice(event);
          }}
          onKeyUp={() => {
            setSelectedMaxPrice(maxPrice);
          }}
          onMouseUp={() => {
            setSelectedMaxPrice(maxPrice);
          }}
        />
      </div>
      <div className="slider">
        <div className="track"></div>
        <div
          className="range"
          style={{ left: leftPercent, right: rightPercent }}
        ></div>
        <div className="thumb left" style={{ left: leftPercent }}></div>
        <div className="thumb right" style={{ right: rightPercent }}></div>
      </div>
      <div className="flex-container extra-mt">
        <span className="min-price">$ {minPrice}</span>
        <span className="max-price">$ {maxPrice}</span>
      </div>
    </>
  );
}

export default Price;
