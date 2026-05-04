import React from 'react'
// import './css/App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      
        {/* ── Navigation bar ── */}
        {/* nav-spacer div pushes the auth buttons (Sign In / Sign Up) to the right */}
        <nav className='navlink'>

          {/* main navigation links on the left */}
          <Link to="/" className='btn btn-sm m-1'>🏠 Home</Link>
           <Link to="/AboutUs" className='btn btn-sm btn-signup'>About Us</Link>
          <Link to="/addproducts" className='btn btn-sm m-1'>＋ Add Products</Link>

          {/* spacer pushes sign in and sign up to the far right */}
          <div className="nav-spacer"></div>

          {/* auth links styled differently — filled orange pill for sign in, outlined for sign up */}
          <Link to="/signin" className='btn btn-sm btn-signin'>Sign In</Link>
          <Link to="/signup" className='btn btn-sm btn-signup'>Sign Up</Link>

        </nav>
    </div>
  )
}

export default Navbar;
