import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/Products.css"; // import the external css
import Footer from './Footer';
import Mycarousel from './Mycarousel';
import Categoriesfeatures from './Categoriesfeatures';
import HeroSection from './Herosection';
import Howworks from './Howitworks';

// import the external css file that contains all styles for this component
// the file must be in the same folder as Getproducts.jsx
// import './Getproducts.css';

// define all product categories used in the navigation bar
// label is what the user sees, value is what we match against product.category in the data
// "all" is a special value that means show every product regardless of category
const categories = [
  { label: "All",                value: "all"                },
  { label: "Power Tools",        value: "power_tools"        },
  { label: "Hand Tools",         value: "hand_tools"         },
  { label: "Building Materials", value: "building_materials" },
  { label: "Plumbing",           value: "plumbing"           },
  { label: "Electrical",         value: "electrical"         },
  { label: "Safety Gear",        value: "safety_gear"        },
];

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // activeCategory tracks which nav pill is currently selected
  // defaults to "all" so all products show on first load
  const [activeCategory, setActiveCategory] = useState("all");

  // searchTerm tracks what the user types in the search box
  const [searchTerm, setSearchTerm] = useState("");

  // declare the navigate hook
  const navigate = useNavigate();

  // insert of the image url to display image
  const img_url = "https://bonnie.alwaysdata.net/static/images/";

  // create a function to help fetch the products from you API
  const fetchProducts = async () => {
    try {
      setLoading(true);

      // interact with your endpoint for fetching the request
      const response = await axios.get("https://bonnie.alwaysdata.net/product/get_products");
      // set update the product hook wit the response given from the API
      setProducts(response.data);
      // set the loading hook back to default
      setLoading(false);
    }
    catch (error) {
      // set the loading back to default
      setLoading(false);
      // update for the error hook with a message
      setError(error.message);
    }
  };

  // use the useeffect this hook  enables that use automatically re-renders features incase of any changes
  useEffect(() => {
    fetchProducts();
  }, []);

// Filtering logic it produces the final list of products to display on screen
// Filtering logic it produces the final list of products to display on screen
const filteredProducts = products.filter((product) => {

  // ADDED: function to normalize category format
  const normalizeCategory = (value) =>
    value?.toLowerCase().replace(/\s+/g, "_").trim();

  //ADDED: normalize API category
  const productCategory = normalizeCategory(product.product_category);

  // ADDED: normalize selected category
  const selectedCategory = normalizeCategory(activeCategory);

  // check if the product matches the selected category
  const matchesCategory =
    selectedCategory === "all" ||
    productCategory === selectedCategory;

  // check if the product name or description contains the search term
  const matchesSearch =
    product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.product_description.toLowerCase().includes(searchTerm.toLowerCase());

  return matchesCategory && matchesSearch;
});

  // console.log(products)
  return (
    // single root div wrapping everything — JSX requires exactly one root element
    <div>

      {/* link to hero section */}
      <HeroSection/>

      {/*NAVIGATION BAR*/}
      <div className="pnav-wrapper">

        {/* top row: page heading + search input */}
        <div className="pnav-top">
          <h2 className="pnav-heading">Our Products</h2>

          {/* search bar — filters products in real time as the user types */}
          <div className="pnav-search-form">
            <span>🔍</span>
            <input
              type="text"
              className="pnav-search-input"
              placeholder="Search products..."
              value={searchTerm}
              // update searchTerm state on every keystroke to trigger live filtering
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* category pills — clicking a pill sets activeCategory which re-filters the list */}
        <div className="pnav-pills">
          {categories.map((cat) => (
            <button
              key={cat.value}
              // add "active" class to the currently selected category pill
              className={`pnav-pill ${activeCategory === cat.value ? "active" : ""}`}
              // update activeCategory when the user clicks this pill
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* exported components section */}
        <Mycarousel/>
        <Categoriesfeatures/>

      </div>

      {/* show loader spinner while products are being fetched */}
      {loading && <Loader />}

      {/* show error message if the API request failed */}
      <h4 className='text-danger'>{error}</h4>

      {/* PRODUCT CARDS GRID */}
      <div className='row px-3'>

        {/* show a friendly message when no products match the current filter or search */}
        {filteredProducts.length === 0 && !loading && (
          <div className="pnav-empty">
            No products found for <strong>{categories.find(c => c.value === activeCategory)?.label}</strong>
            {searchTerm && <span> matching "<strong>{searchTerm}</strong>"</span>}.
          </div>
        )}

        {/* map the filtered products to cards on the user interface */}
        {filteredProducts.map((product) => (

          <div key={product.product_id} className="col-md-3 justify-content-center mb-3">

            <div className="card shadow">
              <img
                src={img_url + product.product_photo}
                alt="product name"
                className='product_image mt-3'
              />
              <div className="card-body">
                <h5 className='text-primary'>{product.product_name}</h5>
                <p className="text-dark">{product.product_description.slice(0, 100)}</p>
                <h4 className="text-danger">Ksh {product.product_cost}</h4>
                <button
                  className="btn btn-outline-info"
                  onClick={() => navigate("/makepayments", { state: { product } })}
                >
                  Purchase Now
                </button>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* links connecting componets to this page */}
      <Howworks/>
      <Footer/> 
    </div>
  );
};

export default Getproducts;
