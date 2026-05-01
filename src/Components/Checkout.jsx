import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dashnavbar from "./Dashnavbar";

const Checkout = () => {

  const { state } = useLocation(); // receive data from Cart page
  const navigate = useNavigate();

  // ================= GET DATA =================
  // fallback to localStorage if user refreshes page
  const cart = state?.cart || JSON.parse(localStorage.getItem("cart")) || [];
  const total = state?.total || cart.reduce(
    (sum, item) => sum + item.product_cost * item.quantity,
    0
  );

  // ================= PAYMENT FUNCTION =================
  const handlePayment = () => {

    // 🔥 simulate payment success
    alert("Payment successful!");

    // 🔥 clear cart after payment
    localStorage.removeItem("cart");

    // 🔥 update navbar
    window.dispatchEvent(new Event("storage"));

    // 🔥 redirect to home or success page
    navigate("/");
  };

  return (
    <>
      <Dashnavbar />

      <div className="container mt-4">
        <h3>Checkout</h3>

        {/* ================= CART SUMMARY ================= */}
        {cart.map(item => (
          <div key={item.product_id}>
            {item.product_name} x {item.quantity}
          </div>
        ))}

        {/* ================= TOTAL ================= */}
        <h4>Total: KSh {total}</h4>

        {/* ================= PAY BUTTON ================= */}
        <button 
          className="btn btn-primary"
          onClick={handlePayment}
          disabled={cart.length === 0}
        >
          Pay Now
        </button>
      </div>
    </>
  );
};

export default Checkout;