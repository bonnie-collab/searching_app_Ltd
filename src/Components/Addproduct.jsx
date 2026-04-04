import React, { useRef, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';
import '../css/Addproducts.css';   // ← import the stylesheet

const Addproducts = () => {

  // intialisation of the hooks
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");
  const [product_category, setProductCategory] = useState("power_tools");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  // handdle form submit function with try and caught error
  const handlesubmit = async (e) => {

    // prevent site from reloading again
    e.preventDefault();
    setLoading(true);

    try {
      // crating the drtails in the formdata
      const formdata = new FormData();

      // append the details in the form data
      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);
      formdata.append("product_category", product_category);

      // axios connection to the backend
      const response = await axios.post("https://bonnie.alwaysdata.net/api/add_product", formdata);

      // srt loading action of the form  with messages
      setLoading(false);
      setSuccess(response.data.message);

      //  set the form back to default
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
      setProductCategory("power_tools");
      fileInputRef.current.value = "";

      // intialisation of time out  if upload is done
      setTimeout(() => setSuccess(""), 5000);

    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    // bootstrap cards
    <div className="ap-wrapper">
      <div className="ap-card">

        <h3 className="ap-heading">Add a product</h3>

        {/* binding the success status */}
        {loading && <Loader />}
        {success && <p className="ap-success">{success}</p>}
        {error   && <p className="ap-error">{error}</p>}

        <form onSubmit={handlesubmit}>

          <div className="ap-field">
            <label className="ap-label">Product / machinery name</label>
            <input
              type="text"
              placeholder="Enter the product name"
              className="ap-input"
              required
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <div className="ap-field">
            <label className="ap-label">Description</label>
            <textarea
              placeholder="Enter a description of the product"
              className="ap-textarea"
              required
              value={product_description}
              onChange={(e) => setProductDescription(e.target.value)}
              rows="4"
            />
          </div>

          <div className="ap-field">
            <label className="ap-label">Hire rate / cost</label>
            <input
              type="number"
              placeholder="Enter the price"
              className="ap-input"
              required
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
            />
          </div>

          <div className="ap-field">
            <label className="ap-label">Category</label>
            <select
              className="ap-select"
              required
              value={product_category}
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <option value="">-- Select a Category --</option>
              <option value="power_tools">Power Tools</option>
              <option value="hand_tools">Hand Tools</option>
              <option value="building_materials">Building Materials</option>
              <option value="plumbing">Plumbing</option>
              <option value="electrical">Electrical</option>
              <option value="safety_gear">Safety Gear</option>
            </select>
          </div>

          <div className="ap-field">
            <label className="ap-label">Product photo</label>
            <input
              type="file"
              className="ap-file"
              required
              ref={fileInputRef}
              accept="image/*"
              onChange={(e) => setProductPhoto(e.target.files[0])}
            />
          </div>

          <button type="submit" className="ap-submit" disabled={loading}>
            {loading ? "Adding…" : "Add product"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Addproducts;
