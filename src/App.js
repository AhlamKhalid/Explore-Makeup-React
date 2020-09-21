import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Brand from "./components/Brand";
import ProductsGrid from "./components/ProductsGrid";
import ProductType from "./components/ProductType";
import Price from "./components/Price";

function App() {
  // state
  const [brand, setBrand] = useState("nyx");
  const [checkedProducts, setCheckedProducts] = useState([]);
  // tracked min price
  const [minPrice, setMinPrice] = useState(0);
  // min price selected by user
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  // tracked max price
  const [maxPrice, setMaxPrice] = useState(60);
  // max price selected by user
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(60);
  // price slider style for left thumb & start of highlighted range
  const [leftPercent, setLeftPercent] = useState("0%");
  // price slider style for right thumb & end of highlighted range
  const [rightPercent, setRightPercent] = useState("0%");
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // price slider: passed to Price component
  const priceSlider = {
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
  };

  // API url
  const makeupApiUrl = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;

  // API call.
  /* dependencies of useEffect are brand, checkedProducts, selectedMinPrice, selectedMaxPrice. 
  any change in one will trigger useEffect & resend API request */
  useEffect(() => {
    // loading
    setIsLoading(true);
    // get data
    axios
      .get(makeupApiUrl)
      .then((responseArray) => {
        // handle success
        const allProducts = responseArray.data;
        let filteredProducts;
        // if user checks some product types
        if (checkedProducts.length > 0) {
          filteredProducts = allProducts.filter((product) => {
            // check price
            const isWithinPrice = checkIsWithinPrice(product.price);

            // is product from checked product types
            let isChecked = false;
            if (checkedProducts.includes(product.product_type)) {
              isChecked = true;
            }

            return isChecked && isWithinPrice ? product : null;
          });
        } else {
          filteredProducts = allProducts.filter((product) => {
            const isWithinPrice = checkIsWithinPrice(product.price);

            return isWithinPrice ? product : null;
          });
        }

        setProducts(filteredProducts);
      })
      .catch((error) => {
        // handle error
        console.log(`error: ${error}`);
      })
      .then(() => {
        // always executed
        // hide loading state
        setIsLoading(false);
      });
  }, [brand, checkedProducts, selectedMinPrice, selectedMaxPrice]);

  // clear all filters
  const clearFilters = () => {
    // clear checked product types
    setCheckedProducts([]);

    // clear min price
    setMinPrice(0);
    setSelectedMinPrice(0);
    setLeftPercent("0%");

    // clear max price
    setMaxPrice(60);
    setSelectedMaxPrice(60);
    setRightPercent("0%");
  };

  // check if product price is within range
  const checkIsWithinPrice = (originalProductPrice) => {
    const productPrice = parseFloat(originalProductPrice);
    const isWithinPrice =
      productPrice <= selectedMaxPrice && productPrice >= selectedMinPrice;
    return isWithinPrice;
  };

  return (
    <>
      {/* hero  */}
      <div className="hero">
        <div className="container">
          <h1>Explore Makeup</h1>
          <h4>..brands and search based on product & price</h4>
        </div>
      </div>
      {/* main  */}
      <main className="main-content container">
        {/* sidebar */}
        <aside className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
          <div className="close-btn-container align-right">
            <span
              className="close-btn"
              onClick={() => {
                setIsSidebarOpen(false);
              }}
            >
              close
            </span>
          </div>
          {/* filter by brand  */}
          <Brand brand={brand} setBrand={setBrand} />
          {/* filter by product type */}
          <ProductType
            checkedProducts={checkedProducts}
            setCheckedProducts={setCheckedProducts}
          />
          {/* filter by price */}
          <Price priceSlider={priceSlider} />
          {/* clear filters */}
          <div className="align-right extra-mb">
            <button
              className="clear-filter extra-mt"
              onClick={() => {
                clearFilters();
              }}
            >
              clear all
            </button>
          </div>
        </aside>
        {/* content  */}
        <section className="content">
          {/* open sidebar*/}
          <div className="filter-btn-container">
            <span
              className="filter-btn"
              onClick={() => {
                setIsSidebarOpen(true);
              }}
            >
              <i className="fas fa-filter"></i>
              filter
            </span>
          </div>
          {/* products grid  */}
          <ProductsGrid products={products} />
          {/* loading  */}
          {isLoading && (
            <div className="loading-container">
              <div className="dash-container">
                <div className="dash dash-1"></div>
                <div className="dash dash-2"></div>
                <div className="dash dash-3"></div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
