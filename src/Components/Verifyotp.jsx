import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const VerifyOTP = () => {

  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [phone, setPhone] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);


    // navigate after otp reset
  const navigate = useNavigate();

  useEffect(() => {
    // read phone number saved in session storage by forgot password
    const storedPhone = sessionStorage.getItem("reset_phone");
    if (!storedPhone) {

        // redirects back to the forgot password to start again
      navigate("/forgotpassword");
    } else {
        // store retrieved phone number in alocal state display
      setPhone(storedPhone);
    }

    // depency array with navigate
  }, [navigate]);

//   watches the value and decrements it every second
  useEffect(() => {

    // allow user to resend a new otp
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }

    // schedule timeout that reduces cutdown by i after 1000ms(1 sec)
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);

    // clear the time out if the component unmounts before the timer fires
    return () => clearTimeout(timer);
    //  rerun this effect each  countdown value changes
  }, [countdown]);

    // async function that handles the otp resend request
  const handleResendOTP = async () => {

    // exist if the resend button is not yet enabled 
    if (!canResend) return;

    // cleat any previous error message before retrying
    setError("");

    // show loading message
    setLoading("Resending OTP...");

    // disable loading button again and restart the 60sec countdown
    setCanResend(false);
    setCountdown(60);

    try {
        //  create a formdata object
      const formdata = new FormData();
        // append the formdata stored 
      formdata.append("phone", phone);

        // send a post axios request 
      await axios.post("https://bonnie.alwaysdata.net/api/request-otp", formdata);

        //  clear the loading message once the otp is successfully
      setLoading("");
    } 
    catch {

        // if the resend fail hide  the loading message and show an error
      setLoading("");
      setError("Failed to resend OTP. Please try again.");
    }
  };

    // async function to handle otp verification and password reses
  const handleVerify = async (e) => {

    //  prevent site from reloading
    e.preventDefault();

    //  cleaar every any previous error or request before processing the new request
    setError("");
    setSuccess("");

    //  password check if the both field contains the same value
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ensure password shows minimum length required
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    //  show message while verification and reset password is in progress
    setLoading("Verifying OTP and resetting password...");

    try {
        //  create a formdata object to hold all the fields
      const formdata = new FormData();

        // append the formdata objects
      formdata.append("phone", phone);
      formdata.append("otp", otp);
      formdata.append("new_password", newPassword);

        // send a post request to the backend for password reset
      const response = await axios.post(
        "https://bonnie.alwaysdata.net/api/reset-password",
        formdata
      );

        // hide the loading once its send
      setLoading("");

        // check if the reset was success message
      if (response.data.success) {

        // display success message
        setSuccess("Password reset successfully! Redirecting to sign in...");

        // clear the phone once reset is completed
        sessionStorage.removeItem("reset_phone");

        // redirect user to the sign in page after 3.5 second
        setTimeout(() => {
          navigate("/signin");
        }, 3500);
      }
       else {

        // if fails show a backfall returned message failure
        setError(response.data.message || "Invalid OTP. Please try again.");
      }

    } catch (err) {
        // if fails hide the loading indicator
      setLoading("");

        //  show an errror message
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="card col-md-6 shadow p-4">

        <div className="mb-3">
          <h2 className="text-warning">Verify OTP</h2>
          <p className="text-muted mb-0">
            Enter the OTP sent to{" "}
            <strong>{phone}</strong> and choose a new password.
          </p>
        </div>

        {/* conditionally render a loading spinner and message during the process */}
        {loading && (
          <div className="alert alert-info py-2">
            {/* animated icon shown nxt to the loading text */}
            <span className="spinner-border spinner-border-sm me-2" role="status" />
            {loading}
          </div>
        )}

        {/* render success alert with checkmark and error alert with a warning icon */}
        {success && <div className="alert alert-success py-2">✅ {success}</div>}
        {error && <div className="alert alert-danger py-2">⚠️ {error}</div>}

        <form onSubmit={handleVerify}>

          <label className="form-label fw-semibold">ENTER OTP</label>
          <input
            type="text"
            placeholder="e.g. 123456"
            className="form-control mb-1"
            required
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          />

          <div className="text-end mb-3">
            {canResend ? (
              <button
                type="button"
                className="btn btn-link btn-sm p-0 text-warning"
                onClick={handleResendOTP}
              >
                Resend OTP
              </button>
            ) : (
              <small className="text-muted">
                Resend OTP in <strong>{countdown}s</strong>
              </small>
            )}
          </div>

          <label className="form-label fw-semibold">NEW PASSWORD</label>
          <div className="input-group mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="form-control"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              minLength={6}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword((prev) => !prev)}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <label className="form-label fw-semibold">CONFIRM PASSWORD</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Re-enter new password"
            className="form-control mb-3"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

            {/* password strength indicators */}
          {newPassword && (
            <div className="mb-3">
              <small
                className={
                  newPassword.length >= 8
                    ? "text-success"
                    : newPassword.length >= 6
                    ? "text-warning"
                    : "text-danger"
                }
              >
                {newPassword.length >= 8
                  ? "✅ Strong password"
                  : newPassword.length >= 6
                  ? "⚠️ Acceptable — consider making it longer"
                  : "❌ Too short (min 6 characters)"}
              </small>
            </div>
          )}


          {/* submit button that triggers the form onsubmit handler */}
          <button
            type="submit"
            className="btn btn-warning w-100 fw-bold"
            disabled={!!loading}
          >
            {/* dynamic roloading label processing */}
            {loading ? "Processing..." : "Reset Password"}
          </button>
        </form>

          {/* to go back link to forgot password if number enter was a wrong one  */}
        <div className="mt-3 text-center">
          <Link to="/forgot-password" className="text-secondary text-decoration-none">
            ← Wrong number? Go back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VerifyOTP;
