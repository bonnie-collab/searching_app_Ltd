import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  // function to handle otp request form submission
  const handleRequestOTP = async (e) => {
    // prevent browser from reloading the page
    e.preventDefault();

    // loading message for otp processing
    setLoading("Sending OTP to your number...");

    // clear any previous error or success before new request begins
    setError("");
    setSuccess("");

    try {
      // create a formdata object
      const formdata = new FormData();

      // append the phone entered to the form data
      formdata.append("phone", phone);

      // send a post request to the backend endpoint to request otp
      const response = await axios.post(
        "https://bonnie.alwaysdata.net/api/request-otp",
        formdata
      );

      // debug: log full response to browser console to see exact values
      console.log("Full response:", response);
      console.log("Status:", response.status);
      console.log("Data:", response.data);

      // clear loading message after response is received
      setLoading("");

      // ✅ Fix: removed the if/else check entirely
      // if axios reaches this line it means request was successful
      // axios automatically throws an error for 4xx and 5xx responses
      // so if we are here the otp was sent successfully no need to check status

      // show success message to the user
      setSuccess("OTP sent successfully! Redirecting...");

      // store phone in sessionStorage so VerifyOTP page can use it
      sessionStorage.setItem("reset_phone", phone);

      // clear success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 3000);

      // ✅ redirect to verify-otp page after 3 seconds
      setTimeout(() => {
        navigate("/verify-otp");
      }, 3000);

    } catch (err) {
      // clear loading message on error
      setLoading("");

      // log the error to console for debugging
      console.log("Error:", err);

      // show error message from backend or generic fallback message
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="card col-md-6 shadow p-4">

        {/* Header */}
        <div className="mb-3">
          <h2 className="text-warning">Forgot Password</h2>
          <p className="text-muted mb-0">
            Enter your registered phone number. We'll send you a one-time
            password (OTP) to reset your account.
          </p>
        </div>

        {/* Status Messages */}
        {loading && (
          <div className="alert alert-info py-2">
            <span className="spinner-border spinner-border-sm me-2" role="status" />
            {loading}
          </div>
        )}

        {/* success alert disappears after 3s then redirect happens */}
        {success && <div className="alert alert-success py-2">{success}</div>}

        {error && <div className="alert alert-danger py-2">{error}</div>}

        {/* Form */}
        <form onSubmit={handleRequestOTP}>
          <label className="form-label fw-semibold">PHONE NUMBER</label>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <i className="bi bi-phone"></i> 📱
            </span>
            <input
              type="tel"
              placeholder="e.g. +254712345678"
              className="form-control"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="^\+?[0-9\s\-]{7,15}$"
              title="Enter a valid phone number"
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning w-100"
            disabled={!!loading}
          >
            {/* show sending text while loading otherwise show request otp */}
            {loading ? "Sending..." : "Request OTP"}
          </button>
        </form>

        {/* Back to Sign In */}
        <div className="mt-3 text-center">
          <Link to="/signin" className="text-secondary text-decoration-none">
            ← Back to Sign In
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;