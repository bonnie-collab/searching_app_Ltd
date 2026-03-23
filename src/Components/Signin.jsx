import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

  // define the two hooks for capturing /storing the users input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // declare the three additional hooks
  const[loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const[error, setError] = useState("");

  // use navigate hook to redirect to another page on successfull login
  const navigate = useNavigate();

  //  function to handle the signing action
  const handlesubmit = async (e) => {
    
    // prevent the app from re;oading
    e.preventDefault()

    //update the loading hook with the meassage
    setLoading("process underway")


    try {
      // create a formdata for email and pasword
      const formdata = new FormData()

      //  insert the emal and the 
      formdata.append("email", email)
      formdata.append("password", password)

      // axios module to help connect https protocol
      const response = await axios.post("https://btigar.alwaysdata.net/api/signin",formdata)
      
      
      // set the loading hook back to default
      setLoading("");

      // check whether the user exists as paert of you api response from the api
      if(response.data.user){
        // user is there details entered during sign in are currect
        // setSuccess("log in successfully")
        // if successful let a person redirected to another page
        
        //  how to store users to the local storage
        // localStorage.setItem("user", JSON.stringify(user));

        setTimeout(() => {

        setSuccess("");

      }, 5000);

        navigate("/")   // home route
      }
      else{
        //  user credantials are missing enterd are incorrect
        setError("invalid email or password")
      }

    }

    catch(error){
      // set loading back to default
      setLoading("")

      // update the error on the hook with as msg
      setError("please try again")

    }

  }

  return (
    <div className='row justify-content-center mt-4'>
    
    <div className="card col-md-6 shadow p-4">
      <h1 className='text-warning'>sign in</h1>

      <h5 className="text info">{loading}</h5>
      <h3 className='text-success'>{success}</h3>
      <h5 className='text-danger'>{error}</h5>


      <form onSubmit={handlesubmit}>
        {/* enter email input */}
        <label>EMAIL</label>
        <input type="email"  
        placeholder='enter email'
        className='form-control'
        required
        value={email}
        onChange ={(e) => setEmail(e.target.value)}
        /> <br />
        {/* {email} */}

        {/* enter password input */}
        <label>PASSWORD</label>
        <input type="password" 
        placeholder='enter password'
        className='form-control'
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        /> <br />
        {/* {password} */}

        <input type="submit"
        value="sign in"
        className='btn btn-primary' />

        {/* Forgot Password Link */}
        <div className="mt-3 text-center">
         <span className="text-muted">Forgot your password? </span>
           <Link to="/forgotpassword" className="text-warning fw-semibold">
              Reset it here
            </Link>
        </div>

        Don't have an account? <Link to = {'/sign up'}>sign up</Link>
        
      </form>
    </div>

    </div>
  )
}

export default Signin;
