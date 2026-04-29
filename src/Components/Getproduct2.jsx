import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/Products.css"; // import the external css
import Dashnavbar from './Dashnavbar';
import Footer from './Footer';

// define all product categories used in the navigation bar
const categories = [
  { label: "All",                value: "all"                },
  { label: "Power Tools",        value: "power_tools"        },
  { label: "Hand Tools",         value: "hand_tools"         },
  { label: "Building Materials", value: "building_materials" },
  { label: "Plumbing",           value: "plumbing"           },
  { label: "Electrical",         value: "electrical"         },
  { label: "Safety Gear",        value: "safety_gear"        },
  { label: "Hire Plant & Machinery", value: "hire_plant_machinery" },
];

// initialize the hook to help manage state of the application
const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // activeCategory tracks selected category
  const [activeCategory, setActiveCategory] = useState("all");

  // searchTerm tracks search input
  const [searchTerm, setSearchTerm] = useState("");

  // declare navigate hook
  const navigate = useNavigate();

  // ================= 🔥 MODIFIED ADD TO CART FUNCTION =================
  // (Updated using Code 2 logic + fixes)
  const addToCart = (product) => {

    // 🔥 ADDED: ensure correct product id field
    const productId = product.product_id;

    // 🔥 UPDATED: use ONE storage key (apexCart) instead of searchcart
    const existingCart = JSON.parse(localStorage.getItem('apexCart') || '[]');

    // 🔥 ADDED: check if item already exists in cart
    const existingItemIndex = existingCart.findIndex(
      item => item.product_id === productId
    );

    let updatedCart;

    if (existingItemIndex !== -1) {
      // 🔥 ADDED: increase quantity instead of duplicating product
      updatedCart = existingCart.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // 🔥 ADDED: create new item if not existing
      const newItem = {
        ...product,
        product_id: productId,
        quantity: 1,
        addedAt: new Date().toISOString()
      };

      updatedCart = [...existingCart, newItem];
    }

    // 🔥 UPDATED: save only to apexCart
    localStorage.setItem('apexCart', JSON.stringify(updatedCart));

    // 🔥 KEEP: trigger navbar update
    window.dispatchEvent(new Event('storage'));

    // 🔥 UPDATED: fix selector using correct product_id
    const button = document.querySelector(
      `[data-product-id="${product.product_id}"] .add-to-cart-btn`
    );

    // show success feedback
    if (button) {
      const originalText = button.innerHTML;
      button.innerHTML = '✓ Added!';
      button.style.background = '#2ed573';

      setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
      }, 1500);
    }
  };

  // insert image url
  const img_url = "https://bonnie.alwaysdata.net/static/images/";

  // fetch products from API
  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("https://bonnie.alwaysdata.net/product/get_products");

      setProducts(response.data);
      setLoading(false);
    }
    catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  // auto run on load
  useEffect(() => {
    fetchProducts();
  }, []);

  // ================= FILTERING LOGIC =================
  const filteredProducts = products.filter((product) => {

    // normalize category format
    const normalizeCategory = (value) =>
      value?.toLowerCase().replace(/\s+/g, "_").trim();

    const productCategory = normalizeCategory(product.product_category);
    const selectedCategory = normalizeCategory(activeCategory);

    const matchesCategory =
      selectedCategory === "all" ||
      productCategory === selectedCategory;

    const matchesSearch =
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.product_description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>

      {/* navbar */}
      <Dashnavbar/>

      {/* NAVIGATION BAR */}
      <div className="pnav-wrapper">

        <div className="pnav-top">
          <h2 className="pnav-heading">Our Products</h2>

          {/* search input */}
          <div className="pnav-search-form">
            <span>🔍</span>
            <input
              type="text"
              className="pnav-search-input"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* category pills */}
        <div className="pnav-pills">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`pnav-pill ${activeCategory === cat.value ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </div>

      {/* loader */}
      {loading && <Loader />}

      {/* error */}
      <h4 className='text-danger'>{error}</h4>

      {/* PRODUCT GRID */}
      <div className='row px-3'>

        {/* empty state */}
        {filteredProducts.length === 0 && !loading && (
          <div className="pnav-empty">
            No products found for <strong>{categories.find(c => c.value === activeCategory)?.label}</strong>
            {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}.
          </div>
        )}

        {/* products */}
        {filteredProducts.map((product) => (
          <div key={product.product_id} className="col-md-2 col-6 mb-3">
            
            <div className="product-card">
              
              <img
                src={img_url + product.product_photo}
                alt={product.product_name}
                className="product-img"
                onError={(e) => (e.target.src = "/fallback.png")}
              />

              <div className="product-info">
                
                <h6 className="product-title">
                  {product.product_name}
                </h6>

                <div className="product-price">
                  KSh {product.product_cost}
                </div>

                <div className="product-old-price">
                  KSh {Math.floor(product.product_cost * 1.5)}
                </div>

                <button
                  className="btn btn-sm btn-outline-primary w-100 mt-1"
                  onClick={() => navigate("/makepayments", { state: { product } })}
                >
                  Buy
                </button>

                {/* 🔥 UPDATED: fixed product id binding */}
                <button
                  data-product-id={product.product_id}
                  className='add-to-cart-btn'
                  onClick={() => addToCart(product)}
                >
                  <span className="btn-icon">🛒</span>
                  <span className="btn-text">Add to Cart</span>
                  <div className="btn-glow"></div>
                </button>

              </div>
            </div>
          </div>
        ))}

      </div>

      {/* footer */}
      <Footer/>  
    </div>
  );
};

export default Getproducts;