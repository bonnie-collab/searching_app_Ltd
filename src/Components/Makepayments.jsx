import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from './Loader';
// import Footer from './Footer';

const Makepayments = () => {

    // ❌ OLD:
    // const {product} = useLocation().state || {}

    //  NEW: get cart + total from navigation OR fallback to localStorage
    const location = useLocation();
    const cart = location.state?.cart || JSON.parse(localStorage.getItem('apexCart')) || [];

    // declare the navigate hook
    const navigate = useNavigate()

    // below we specify the image base url
    const img_url = "https://bonnie.alwaysdata.net/static/images/"

    // Calculate total dynamically (important fix)
    const totalAmount = cart.reduce((sum, item) => {
        return sum + (item.product_cost * item.quantity);
    }, 0);

    // initialize hooks to manage the state of your application
    const [number, setNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    // auto clear message setter
    const autoClear = (setter) => {
        setTimeout(() => setter(""),5000);
    };

    // create a function that will handle the submit action
    const handlesubmit = async (e) =>{
        e.preventDefault()

        //  VALIDATION (NEW)
        if (cart.length === 0) {
            setError("Your cart is empty");
            autoClear(setError);
            return;
        }

        if (!number.startsWith("254")) {
            setError("Use format 2547XXXXXXXX");
            autoClear(setError);
            return;
        }

        setLoading(true)

        try{
            const formdata = new FormData()

            // append the data to the form data
            formdata.append("phone", number)

            // ❌ OLD: product.product_cost
            // ✅ NEW: send TOTAL cart amount
            formdata.append("amount", totalAmount)

            const response = await axios.post("https://bonnie.alwaysdata.net/api/mpesa_payment", formdata)

            setLoading(false)

            setSuccess(response.data.message)

            // clear the shared cart state after payment
            localStorage.removeItem('apexCart');
            window.dispatchEvent(new Event('storage'));
            window.dispatchEvent(new Event('cartUpdate'));

            autoClear(setSuccess);
        }
        catch(error){
            setLoading(false)
            setError(error.message)
            autoClear(setError);
        }
    }

  return (
    <div className='row justify-content-center'>

        <h1 className="text-success">Make Payment - Lipa na M-Pesa</h1>

        <div className="col-md-1">
            <input type="button"
            className="btn btn-primary"
            value="<- Back"
            onClick={() => navigate("/") } /> {/*  go back to cart now */}
        </div>

        <div className="col-md-6 card shadow p-4">

            {/*  HANDLE EMPTY CART SAFELY */}
            {cart.length === 0 ? (
                <h3 className="text-danger">No items in cart</h3>
            ) : (
                <>
                    {/* 🔁 LOOP THROUGH CART ITEMS */}
                    {cart.map((item, index) => (
                        <div key={index} className="mb-3 border-bottom pb-2">

                            <img 
                                src={img_url + item.product_photo} 
                                alt={item.product_name} 
                                className='product_img'
                                style={{ width: "100px" }}
                            />

                            <div className="card-body ">
                                <h5 className="text-info"> {item.product_name} </h5>

                                <p className="text-dark"> {item.product_description} </p>

                                <h6 className="text-warning">
                                    Kes {item.product_cost} x {item.quantity}
                                </h6>
                            </div>
                        </div>
                    ))}

                    {/* TOTAL DISPLAY */}
                    <h3 className="text-success">
                        Total: Kes {totalAmount.toLocaleString()}
                    </h3>

                    <form onSubmit={handlesubmit}>

                        {/* bind the loading hook */}
                        {loading && <Loader />}

                        {success && <h3 className="text-success"> {success} </h3>}
                        {error && <h4 className="text-danger"> {error} </h4>}

                        <label className='text-warning'>Enter phonenumber</label>
                        <input type="number"
                        className='form-control'
                        placeholder='Enter the Phone number 2547XXXXXXXX'
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)} /> <br />

                        <input type="submit"
                        value="Make Payment"
                        className='btn btn-success' />
                    </form>
                </>
            )}
        </div>
    </div>
  )
}

export default Makepayments;