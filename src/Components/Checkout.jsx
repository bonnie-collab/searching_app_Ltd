import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

const Mpesapayment = () => {
  // Router helpers for navigation and reading passed state from the checkout route
  const navigate = useNavigate();
  const locationState = useLocation().state || {};
  const { cartItems = null, subtotal = 0, deliveryFee = 0, total = 0 } = locationState;

  // Load cart items from router state if available, otherwise use localStorage fallback
  const storageCart = JSON.parse(localStorage.getItem('apexCart') || '[]');
  const normalizedItems = Array.isArray(cartItems) ? cartItems : storageCart;

  // Helper to compute the subtotal based on product cost and quantity
  const calculateSubtotal = (itemsList) =>
    itemsList.reduce(
      (sum, item) => sum + Number(item.product_cost || 0) * (item.quantity || 1),
      0
    );

  const [items, setItems] = useState(normalizedItems);
  const [localSubtotal, setLocalSubtotal] = useState(
    subtotal || calculateSubtotal(normalizedItems)
  );
  const [localDeliveryFee, setLocalDeliveryFee] = useState(
    deliveryFee || (normalizedItems.length ? 200 : 0)
  );
  const [localTotal, setLocalTotal] = useState(
    total || localSubtotal + localDeliveryFee
  );
  const [paid, setPaid] = useState(false);
  const [phone, setPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Base URL used for rendering product images in the order summary
  const img_url = "https://bonnie.alwaysdata.net/static/images/";

  useEffect(() => {
    // Determine whether the user is logged in from localStorage
    const userToken = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    setIsLoggedIn(Boolean(userToken && user));
  }, []);

  useEffect(() => {
    // Recalculate subtotal and total anytime cart items or delivery fee change
    const newSubtotal = calculateSubtotal(items);
    setLocalSubtotal(newSubtotal);
    setLocalTotal(total || newSubtotal + localDeliveryFee);
  }, [items, localDeliveryFee, total]);

  useEffect(() => {
    // Redirect to the checkout route if there are items but the user is not logged in
    if (items.length > 0 && !isLoggedIn) {
      navigate('/checkout');
    }
  }, [items, isLoggedIn, navigate]);

  const grandTotal = localTotal || localSubtotal + localDeliveryFee;

  const continueShopping = () => {
    navigate("/getproduct2");
  };

  const submit = async (e) => {
    e.preventDefault();

    // Validate required phone number input before sending the payment request
    if (!phone) {
      setError("Please enter a phone number.");
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", grandTotal);
      data.append("items", JSON.stringify(items));

      // Submit payment information to the backend M-Pesa endpoint
      const response = await axios.post("https://bonnie.alwaysdata.net/api/mpesa_payment",data)

      setSuccess(response.data.message || "Payment completed successfully!");
      setPaid(true);

      // Clear local checkout state after successful payment
      setItems([]);
      setLocalSubtotal(0);
      setLocalDeliveryFee(0);
      setLocalTotal(0);
      setPhone("");
      localStorage.removeItem('Cart');
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new Event('cartUpdate'));
    } catch (err) {
      setError("Payment failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if ((!items || items.length === 0) && !paid) {
    return (
      
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card shadow p-4 text-center">
            <h3 className="mb-3">No items in your cart.</h3>
            <p className="text-muted mb-4">Add products to your cart before checking out.</p>
            <button className="btn btn-primary w-100" onClick={continueShopping}>
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (paid) {
    return (
      <div className="row justify-content-center mt-5">

        <div className="col-md-6">

          <div className="card shadow p-4 text-center">
            <h3 className="mb-3">Payment Complete</h3>
            <p className="text-muted mb-4">Your order has been processed. The checkout has been reset.</p>
            <button className="btn btn-success w-100" onClick={continueShopping}>
              Continue shopping
            </button>
          </div>
          
        </div>

      </div>
    );
  }
  

  return (
    
    <div className="row justify-content-center mt-3">
      
      {loading && <Loader />}
      {success && <p className="text-success text-center">{success}</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <h1 className="text-success text-center mb-4">Lipa na M-Pesa</h1>

      <div className="col-md-6">

        
          <div className="col-md-1">
            <input type="button"
            className="btn btn-primary"
            value="<- Back"
            onClick={() => navigate("/cart") } />
          </div>
        
        <h3>Order Summary</h3>

        {items.map((item) => (
          <div key={item.product_id || item.id} className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={img_url + item.product_photo}
              alt={item.product_name}
              className="me-3"
              style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
            />

            <div className="flex-grow-1">
              <h5 className="mb-1">{item.product_name}</h5>
              <p className="text-danger mb-0">KES {Number(item.product_cost).toLocaleString()}</p>
              <small className="text-muted">Quantity: {item.quantity || 1}</small>
            </div>

            <div className="fw-bold ms-3">
              KES {(Number(item.product_cost) * (item.quantity || 1)).toLocaleString()}
            </div>

          </div>
        ))}

        <div className="mt-3 border-top pt-3">

          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>KES {localSubtotal.toLocaleString()}</span>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <span>Delivery:</span>
            <span>KES {localDeliveryFee.toLocaleString()}</span>
          </div>

          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Grand Total:</span>
            <span>KES {grandTotal.toLocaleString()}</span>
          </div>

        </div>
      </div>

      <div className="col-md-5">
        <div className="card shadow p-4 text-center">

          <form onSubmit={submit}>
            <label className="form-label fw-semibold">Enter your phone number</label>
            <input
              type="tel"
              className="form-control text-center mb-3"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-success w-100">
              Complete Payment
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Mpesapayment;