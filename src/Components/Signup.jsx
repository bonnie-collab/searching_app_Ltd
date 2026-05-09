import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../css/Signup.css";

const Signup = () => {
  // initialise the hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // hooks to toggle password and confirm password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // hook to store mismatch error message
  const [passwordError, setPasswordError] = useState("");

  // define the three state of an application will move on
  const [loading, setLoading] = useState("");
  const [succes, setSuccess] = useState("");
  const [error, setError] = useState("");

  // cons for navigation to another component
  const navigate = useNavigate();

  // below is a function to handle a submit action
  const handleSubmit = async (e) => {
    // prevent site from re-loading
    e.preventDefault()

    // confirm password match before proceeding
    if (password !== confirmPassword) {

      // display mismatch error
      setPasswordError("Passwords do not match");

      // clear mismatch message
      setTimeout(() => setPasswordError(""), 5000);

      // stop from submission
      return;
    }

    // update loading hook with msg which will display to the user who are trying to register
    setLoading("registration in progress")

    try {
      // create a form data will enable you to capture the four details entered
      const formdata = new FormData();

      // insert the 4 details in terms of key pair values
      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("phone", phone);
      formdata.append("password", password);

      // using axios we can use method post
      const response = await axios.post("https://bonnie.alwaysdata.net/api/signup", formdata)

      // set back the loading to default
      setLoading("");

      // in case everything goes well update hook with the message
      setSuccess(response.data.message)
      navigate("/signin")

      // clear hooks
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");
    }
    catch (error) {
      // set the loading back to default
      setLoading("")

      // update the error hook with the message given back from the response
      setError(error.message)
    }
  }

  return (
    <>
      {/* Main split layout container — mirrors the Signin page layout */}
      <div style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden"
      }}>

        {/* ── LEFT SIDE IMAGE (same as Signin page) ── */}
        <div style={{
          flex: 1,
          position: "relative"
        }}>
          <img
            src="/images/excavator.jpg"
            alt="construction"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />

          {/* overlay text on the image — same branding as Signin */}
          <div style={{
            position: "absolute",
            bottom: "40px",
            left: "30px",
            color: "#fff",
            maxWidth: "300px"
          }}>
            <p style={{ fontSize: "0.9rem", marginBottom: "10px" }}>
              "Access powerful machinery anytime, anywhere."
            </p>
            <h4 style={{ margin: 0 }}>SEARCHING LTD</h4>
            <small>CONSTRUCTION PLATFORM</small>
          </div>
        </div>

        {/* ── RIGHT SIDE FORM ── */}
        <div style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
          overflowY: "auto"
        }}>

          {/* ── Back Button — takes user to home page if they don't want to proceed ── */}
          <button
            onClick={() => navigate("/")}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              padding: "8px 14px",
              cursor: "pointer"
            }}
          >
            ← Back
          </button>

          {/* ── signup card ── */}
          <div className="card" style={{ width: "100%", maxWidth: "480px", padding: "2rem" }}>
            <h2>CREATE ACCOUNT</h2>

            <form onSubmit={handleSubmit}>

              {/* status messages */}
              <h5 className='text-warning'>{loading}</h5>
              <h3 className='text-success'>{succes}</h3>
              <h4 className='text-danger'>{error}</h4>

              <label>USERNAME</label>
              <input
                type="text"
                placeholder='Your username'
                className='form-control'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              /> <br />

              <label>EMAIL</label>
              <input
                type="text"
                placeholder='Enter your email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /> <br />

              <label>PHONE NUMBER</label>
              <input
                type="text"
                placeholder='Enter your phone number'
                className='form-control'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              /> <br />

              <label>PASSWORD</label>
              <div className="input-group mb-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='**********'
                  className='form-control'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                {/* toggle button to show or hide password */}
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* icon changes based on visibility */}
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>

              {/* confirm password with eye icon toggle */}
              <div className="input-group mb-2">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder='Confirm your password'
                  className='form-control'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                {/* toggle button to show or hide confirm password */}
                <span
                  className="input-group-text"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {/* change icon based on visibility state */}
                  {showConfirmPassword ? "🙈" : "👁️"}
                </span>
              </div>

              {/* display password mismatch error — disappears in 5 seconds */}
              {passwordError && (
                <p className="text-danger">{passwordError}</p>
              )}

              <input type="submit" value="Sign Up" className='btn btn-primary' /> <br /> <br />

              {/* redirect to signin if the user already has an account */}
              Already have an account? <Link to={'/signin'}>Sign in</Link>
            </form>
          </div>

        </div>
      </div>
    </>
  )
}

export default Signup;