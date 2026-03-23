import React, { useRef, useState } from 'react'
import Loader from './Loader';
import axios from 'axios';

const Addproducts = () => {

  // define the hooks 
  const[product_name, setProductName] = useState("");
  const[product_description, setProductDescription] = useState("");
  const[product_cost, setProductCost] = useState("");
  const[product_photo, setProductPhoto] = useState("");

  // declare a hook to store the selected product category
  // defaults to "power_tools" so the form always has a valid value on first submit
  const[category, setCategory] = useState("power_tools");

  // decleare additional hook to manage state
  const[loading, setLoading] = useState(false);
  const[success, setSuccess] = useState("");
  const[error, setError] = useState("");
  const fileInputRef = useRef(null)

  // create a function that will handle submit action
  const handlesubmit = async (e) =>{
    // prevent the site from reloading
    e.preventDefault()

    // setloading hook with a message (activate it )
    setLoading(true)

    try{
      // create a formdata
      const formdata = new FormData()

      // append the details to the form
      formdata.append("product_name",product_name);
      formdata.append("product_description",product_description);
      formdata.append("product_cost",product_cost);
      formdata.append("product_photo", product_photo);

      // append the selected category so the backend can store it in the category column
      formdata.append("category", category);

      // axios to use to interact with method post
      const response = await axios.post("https://btigar.alwaysdata.net/api/add_product",formdata)

    // setloading back to default
    setLoading(false)

    // update the hooks with a message
    setSuccess(response.data.message)

    // clear the hooks to default
    setProductName("");
    setProductDescription("");
    setProductCost("");
    setProductPhoto("");

    // reset category dropdown back to the first option after successful submit
    setCategory("power_tools");

    fileInputRef.current.value = "";  //clears the file input display

    setTimeout(() => {
        setSuccess("");
      }, 5000);

    }
    catch(error){
      // setloaading back to default
      setLoading(false)

      // update the seterror with a message
      setError(error.message)
    }
  }

  return (
    <div className='row justify-content-center mt-5'>
      <div className="col-md-6 p-6 shadow">
        <h3 className='text-primary'>welcome to the product page</h3>

        {/* bind the loading hook */}
        {loading && <Loader/>}

        <h3 className='text-success'>{success}</h3>
        <h4 className='text-danger'>{error}</h4>

        <form onSubmit={handlesubmit}>

          {/* product name */}
          <input type="text" 
          placeholder='Enter the product name'
          className='form-control'
          required
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
          /> <br />

          {/* product description */}
          <input type="text"
          placeholder='enter the description of product'
          className='form-control'
          required
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}
          /> <br />

          {/* product cost */}
          <input type="number"
          placeholder='enter your price cost'
          className='form-control'
          required 
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}
          /> <br />

          {/* product category dropdown */}
          {/* the selected value is stored in the category hook and appended to formdata on submit */}
          <label className='text-primary'>Product Category</label>
          <select
            className='form-control'
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {/* each option value must match the category values used in Getproducts.jsx */}
            <option value="">-- Select a Category --</option>
            <option value="power_tools">Power Tools</option>
            <option value="hand_tools">Hand Tools</option>
            <option value="building_materials">Building Materials</option>
            <option value="plumbing">Plumbing</option>
            <option value="electrical">Electrical</option>
            <option value="safety_gear">Safety Gear</option>
          </select> <br />

          {/* product photo */}
          <label className="text-primary">Product Photo</label>
          <input type="file"
          className='form-control'
          required
          ref={fileInputRef}
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])} 
          /> <br />

          <input type="submit"
          value = "add product"
          className='btn btn-primary'
          /> <br /> <br />

        </form>
      </div>
      
    </div>
  )
}

export default Addproducts;
