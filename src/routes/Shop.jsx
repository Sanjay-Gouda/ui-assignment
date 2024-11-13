import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [Allproducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [minPriceValue, setMinPriceValue] = useState(0);
  const [maxPriceValue, setMaxPriceValue] = useState(1000);


  const fetchProducts = async () => {
    const productsResp = await fetch("https://fakestoreapi.com/products");
    const productsData = await productsResp.json();
    if (productsData) {
      setProducts(productsData);
      setAllProducts(productsData);
      setLoading(false);
    }
  }

  const fetchCategories = async () => {
    const categoryResp = await fetch("https://fakestoreapi.com/products/categories");
    const categoryData = await categoryResp.json();
    if (categoryData) {
      setCategories(categoryData);
    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, [])

  function updateProducts() {
    const checkedCategories = Array.from(
      document.querySelectorAll(".category-item input:checked")
    ).map((checkbox) => checkbox.value);
    console.log('checkedCategoriescheckedCategories', checkedCategories)
    setTimeout(() => {
      if (checkedCategories.length === 0) {
        setProducts(Allproducts);
      } else {
        const filteredProducts = Allproducts.filter((product) => checkedCategories.includes(product.category));
        setProducts(filteredProducts);
      }
    }, 500);
  }

  function updatePrices(e) {
    let minValue = parseInt(minPriceValue);
    let maxValue = parseInt(maxPriceValue);
    if (e?.target?.id == "minPrice") {
      minValue = e.target.value;
      setMinPriceValue(e.target.value);
    } else {
      maxValue = e.target.value;
      setMaxPriceValue(e.target.value);
    }

    if (minValue > maxValue - 50) {
      if (e.target.id === "minPrice") setMinPriceValue(maxValue - 50);
      else setMaxPriceValue(minValue + 50);
    }
    filterProductsByPrice();
  }

  function filterProductsByPrice() {
    setTimeout(() => {
      const filteredProducts = Allproducts.filter((product) => {
        return product.price >= minPriceValue && product.price <= maxPriceValue;
      });

      setProducts(filteredProducts);

    }, 500);
  }

  function handleSearch(e) {
    const searchValue = e?.target?.value?.trim?.()?.toLowerCase?.();
    const filteredProducts = Allproducts.filter((product) => {
      return product.title.toLowerCase().includes(searchValue);
    });
    setProducts(filteredProducts);
  };

  function handleSort(e) {
    setLoading(true);
    const sortBy = e?.target?.value;
    console.log('sortBysortBy', sortBy)
    let sortedProducts = products
    setTimeout(() => {
      if (sortBy === "Price -- Low to High") {
        sortedProducts = products.sort((a, b) => a.price - b.price);
      } else if (sortBy === "Price -- High to Low") {
        sortedProducts = products.sort((a, b) => b.price - a.price);
      } else if (sortBy === "Ratings") {
        sortedProducts = products.sort((a, b) => b.rating.rate - a.rating.rate);
      }
      console.log('sortedProductssortedProducts', sortedProducts)
      setProducts(sortedProducts);
      setLoading(false);
    }, 500)
  };

  console.log('productsproducts', products)

  return <>
    <Header />
    <div className="sub-header">
      <div className="rightContentSub">
        <div>
          <span
          >Men's <br />
            Outerwear</span
          >
        </div>
      </div>
      <img src="/subHeaderImg.png" />
    </div>
    <div className="product-list">
      <div className="filters">
        <span>Clothing / Women's / Outerwear</span>
        <h5>Filters</h5>
        <hr />
        <h5>Categories</h5>
        <div className="filterCat">
          <div id="filtersContainer" className="categories-list">
            {categories?.map(category => <div className="category-item">
              <input type="checkbox" id={`category-${category}`} value={category} onChange={updateProducts} />
              <label for={`category-${category}`}>{category}</label>
            </div>)}
          </div>
        </div>
        <hr />
        <h5>Price Range</h5>
        <div className="filterPrice">
          <div id="priceRange" className="priceRange">
            <input
              type="range"
              min="0"
              max="1000"
              value={minPriceValue}
              id="minPrice"
              className="slider"
              onChange={updatePrices}
            />
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPriceValue}
              id="maxPrice"
              className="slider"
              onChange={updatePrices}
            />
            <div className="priceValues">
              <span id="minPriceValue">{minPriceValue}</span> -
              <span id="maxPriceValue">{maxPriceValue}</span>
            </div>
          </div>
        </div>
      </div>
      {loading && <div className="loading-overlay">
        <p>Loading...</p>
      </div>}
      <div>
        <div className="productDet">
          <span id="totalProductCount"></span>
          <div>
            <input type="search" id="productSearch" placeholder="search here" onChange={handleSearch} />
          </div>
          <div className="sortOptions">
            <select onChange={handleSort}>
              <option selected disabled>Select</option>
              <option>Ratings</option>
              <option>Price -- Low to High</option>
              <option>Price -- High to Low</option>
            </select>
          </div>
        </div>
        <div className="products-container">
          {products?.length > 0 && products?.map(product => (
            <div className="productList">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <div className="load-more">
      <button>Load More</button>
    </div> */}
    <Footer />
  </>
}
