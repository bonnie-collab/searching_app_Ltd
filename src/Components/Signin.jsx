import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

// import the external css file that contains all styles for this signin component
import '../css/Signin.css';

const Signin = () => {

  // define the two hooks for capturing /storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // declare the three additional hooks
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // use navigate hook to redirect to another page on successfull login
  const navigate = useNavigate();

  //  function to handle the signing action
  const handlesubmit = async (e) => {

    // prevent the app from reloading
    e.preventDefault()

    // clear any previous error before new attempt
    setError("")

    //update the loading hook with the meassage
    setLoading("Please wait as we sign in to your account...")

    // clear loading after some time
    setTimeout(() => {
      setLoading("");
    }, 3000);

    try {
      // create a formdata for email and pasword
      const formdata = new FormData()

      //  insert the emal and the password
      formdata.append("email", email)
      formdata.append("password", password)

      // axios module to help connect https protocol
      const response = await axios.post("https://bonnie.alwaysdata.net/api/signin", formdata)

      // set the loading hook back to default
      setLoading("");

      // check whether the user exists as paert of you api response from the api
      if (response.data.user) {
        // user is there details entered during sign in are currect
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);

        // if yhe user exist ,update the success hook with a message
        setSuccess("login successful")

        // back to default
        setEmail("")
        setPassword("")


        //  how to store users to the local storage
        // localStorage.setItem("user", JSON.stringify(user));

        navigate("/")   // home route

        // delay use to seee success massega
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      else {
        //  user credantials are missing enterd are incorrect
        setError("invalid email or password")

        // error hide after 4sec
        setTimeout(() => {
          setError("");
        }, 3000);
      }

        setTimeout(() => {
          setSuccess("");
        }, 3000);

    }
    catch (error) {
      // set loading back to default
      setLoading("")

      // update the error on the hook with as msg
      setError("login in failed please try again")

      // clear error message displayed
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }

  return (
    // full page wrapper — centers the card vertically and horizontally
    <div className="signin-page">

      {/* ── sign in card ── */}
      <div className="signin-card">

        {/* brand logo row at the top of the card */}
        <div className="signin-brand">
          <div className="signin-brand-icon">🛒</div>
          <span className="signin-brand-name">SokoGarden</span>
        </div>

        {/* page heading and subtitle */}
        <h1 className="signin-heading">Welcome back</h1>
        <p className="signin-subheading">Sign in to your account to continue</p>

        {/* ── status messages ── */}
        {/* loading indicator shown while the api request is in progress */}
        {loading && (
          <div className="signin-status loading">
            ⏳ {loading}
          </div>
        )}

        {/* success message shown after a successful login */}
        {success && (
          <div className="signin-status success">
            ✅ {success}
          </div>
        )}

        {/* error message shown when login fails */}
        {error && (
          <div className="signin-status error">
            ⚠️ {error}
          </div>
        )}

        {/* ── sign in form ── */}
        <form onSubmit={handlesubmit}>

          {/* enter email input */}
          <div className="signin-field">
            <label className="signin-label">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="signin-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* enter password input */}
          <div className="signin-field">
            <label className="signin-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="signin-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* submit button */}
          <button type="submit" className="signin-btn">
            Sign In
          </button>

        </form>

        {/* Forgot Password Link */}
        <div className="signin-forgot">
          <span>Forgot your password? </span>
          <Link to="/forgotpassword">Reset it here</Link>
        </div>

        <hr className="signin-divider" />

        {/* sign up prompt for new users */}
        <div className="signin-signup-prompt">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>

      </div>
    </div>
  )
}

export default Signin;
