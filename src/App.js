import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproducts from './Components/Addproduct';
import Getproducts from './Components/Getproducts';
import Test from './Components/Test';
import ForgotPassword from './Components/Forgotpassword';
import VerifyOTP from './Components/Verifyotp';
import Makepayments from './Components/Makepayments';
import Notfound from './Components/Notfound';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className='searchingltd'>welcome to searching Limited Quality construction materials & tools. Buy new or resale.</h1>
      </header>

      

        {/* ── Navigation bar ── */}
        {/* nav-spacer div pushes the auth buttons (Sign In / Sign Up) to the right */}
        <nav className='navlink'>

          {/* main navigation links on the left */}
          <Link to="/"            className='btn btn-sm m-1'>🏠 Home</Link>
          <Link to="/addproducts" className='btn btn-sm m-1'>＋ Add Products</Link>

          {/* spacer pushes sign in and sign up to the far right */}
          <div className="nav-spacer"></div>

          {/* auth links styled differently — filled orange pill for sign in, outlined for sign up */}
          <Link to="/signin" className='btn btn-sm btn-signin'>Sign In</Link>
          <Link to="/signup" className='btn btn-sm btn-signup'>Sign Up</Link>

        </nav>


      {/* different routes binnding the rendered documents */}
      <Routes>
        <Route path='/' element = {<Getproducts/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/signin' element = {<Signin/>}/>
        <Route path='/addproducts' element = {<Addproducts/>}/>
        <Route path='/forgotpassword' element = {<ForgotPassword/>}/>
        <Route path='/makepayments' element = {<Makepayments/>} />
        <Route path='/verify-otp' element = {<VerifyOTP/>}/>
        <Route path='*' element = {<Notfound/>}/>
        <Route path='/test' element = {<Test/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
