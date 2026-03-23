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
    // prevent broswer from reloading the page
    e.preventDefault();

    // loading message for otp processing
    setLoading("Sending OTP to your number...");

    // clear any error before new request begins
    setError("");
    // sucess message
    setSuccess("");

    try {
        //  crate a formdata object
      const formdata = new FormData();

        //  append the phone entered to the form data
      formdata.append("phone", phone);

        // send a post request to the backend point request for otp
      const response = await axios.post(
        "https://bonnie.alwaysdata.net/api/request-otp",
        formdata
      );
        //  loading message
      setLoading("");

      if (response.data === 200) {

        setSuccess(response.data.message); 
        
        setSuccess("OTP sent successfully! Redirecting...");
        // Store phone in sessionStorage so VerifyOTP page can use it
        sessionStorage.setItem("reset_phone", phone);

        // redirect user to the otp verification page (1.5sec)
        setTimeout(() => {
          navigate("/verify-otp");
        }, 1500);
      } else {
        //  if did not confrim success show error message
        setError(response.data.message || "Could not send OTP. Check your number.");
      }
    } catch (err) {

    //  clear loading message
      setLoading("");
    //   error asking user to try again
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
            password (OTP) to reset your account. [COMING SOON]
          </p>
        </div>

        {/* Status Messages */}
        {loading && (
          <div className="alert alert-info py-2">
            <span className="spinner-border spinner-border-sm me-2" role="status" />
            {loading}
          </div>
        )}
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
            className="btn btn-warning"
            disabled={!!loading}
          >
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
