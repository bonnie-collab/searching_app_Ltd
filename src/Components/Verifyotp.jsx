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
    // read phone number saved in session storage by forgot password page
    const storedPhone = sessionStorage.getItem("reset_phone");

    // log what is in sessionStorage to confirm it was saved correctly
    console.log("Phone from sessionStorage:", storedPhone);

    if (!storedPhone) {
      //changed /forgotpassword to /forgot-password to match the route
      // if no phone found redirect back to forgot password to start again
      navigate("/forgot-password");
    } else {
      // store retrieved phone number in local state for display
      setPhone(storedPhone);
    }

  // dependency array with navigate
  }, [navigate]);

  // watches the countdown value and decrements it every second
  useEffect(() => {

    // allow user to resend a new otp when countdown reaches zero
    if (countdown <= 0) {
      setCanResend(true);
      return;
    }

    // schedule timeout that reduces countdown by 1 after 1000ms (1 sec)
    const timer = setTimeout(() => setCountdown((prev) => prev - 1), 1000);

    // clear the timeout if the component unmounts before the timer fires
    return () => clearTimeout(timer);

  // rerun this effect each time countdown value changes
  }, [countdown]);

  // async function that handles the otp resend request
  const handleResendOTP = async () => {

    // exit if the resend button is not yet enabled
    if (!canResend) return;

    // clear any previous error message before retrying
    setError("");

    // show loading message
    setLoading("Resending OTP...");

    // disable resend button again and restart the 60sec countdown
    setCanResend(false);
    setCountdown(60);

    try {
      // create a formdata object
      const formdata = new FormData();

      // append the phone stored in state
      formdata.append("phone", phone);

      // send a post axios request to resend otp
      await axios.post("https://bonnie.alwaysdata.net/api/request-otp", formdata);

      // clear the loading message once the otp is successfully resent
      setLoading("");

      // show success message so user knows otp was resent
      setSuccess("OTP resent successfully! Check your phone.");

      // clear success message after 3 seconds
      setTimeout(() => setSuccess(""), 3000);

    } catch {
      // if the resend fails hide the loading message and show an error
      setLoading("");
      setError("Failed to resend OTP. Please try again.");
    }
  };

  // async function to handle otp verification and password reset
  const handleVerify = async (e) => {

    // prevent page from reloading
    e.preventDefault();

    // clear any previous error or success before processing the new request
    setError("");
    setSuccess("");

    // password check: ensure both fields contain the same value
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // ensure password meets minimum length required
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // show message while verification and password reset is in progress
    setLoading("Verifying OTP and resetting password...");

    //TESTING BYPASS: accepts any 6-digit otp during development
    // uncomment the line below and comment out the real check when testing is done
    // if (otp.length === 6)

    // REAL OTP CHECK: uncomment this block when testing is done
    // if (otp.length === 6 && otp === realOtp)

    if (otp.length === 6) // ← BYPASS: remove this line in production and uncomment real check above
    try {
      // create a formdata object to hold all the fields
      const formdata = new FormData();

      // append phone, otp and new password to formdata
      formdata.append("phone", phone);
      formdata.append("otp", otp);
      formdata.append("new_password", newPassword);

      // send a post request to the backend reset-password endpoint
      const response = await axios.post(
        "https://bonnie.alwaysdata.net/api/reset-password",
        formdata
      );

      // log full response for debugging in browser console
      console.log("Reset response:", response);
      console.log("Reset response data:", response.data);

      // hide the loading once response is received
      setLoading("");

      // check both response.data.success AND response.status
      // because sometimes backend returns 200 without a success field
      if (response.data.success || response.status === 200) {

        // display success message to the user
        setSuccess("Password reset successfully! Redirecting to sign in...");

        // clear the phone from sessionStorage once reset is completed
        sessionStorage.removeItem("reset_phone");

        // clear success message after 3 seconds
        setTimeout(() => setSuccess(""), 3000);

        // redirect user to the sign in page after 3 seconds
        setTimeout(() => {
          navigate("/signin");
        }, 3000);

      } else {
        // if backend returns failure show the message returned
        setError(response.data.message || "Invalid OTP. Please try again.");
      }

    } catch (err) {
      // hide the loading indicator on error
      setLoading("");

      // log the actual error to browser console for debugging
      console.log("Reset error:", err);
      // console.log("Error response:", err.response);

      // show error message from backend or fallback message
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
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
            {/* animated spinner shown next to the loading text */}
            <span className="spinner-border spinner-border-sm me-2" role="status" />
            {loading}
          </div>
        )}

        {/* render success alert with checkmark and error alert with warning icon */}
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

          {/* password strength indicator */}
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
            {/* dynamic loading label while processing */}
            {loading ? "Processing..." : "Reset Password"}
          </button>
        </form>

        {/* back link to forgot password if wrong number was entered */}
        <div className="mt-3 text-center">
          <Link to="/forgotpassword" className="text-secondary text-decoration-none">
            ← Wrong number? Go back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default VerifyOTP;