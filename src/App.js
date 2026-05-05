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
import Getproduct2 from './Components/Getproduct2';
import Dashnavbar from './Components/Dashnavbar';
import Profile from './Components/Profile';
import Cart from './Components/Cart';
import Checkout from "./Components/Checkout";
import Aboutus from './Components/Aboutus';


function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className='searchingltd'>welcome to searching Limited Quality construction materials & tools. Buy new or resale.</h1>
      </header>

      

        {/* ── Navigation bar ──
        {/* nav-spacer div pushes the auth buttons (Sign In / Sign Up) to the right */}


      {/* different routes binnding the rendered documents */}
      <Routes>
        <Route path='/' element = {<Getproducts/>}/>
        <Route path='/getproduct2' element= {<Getproduct2/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/signin' element = {<Signin/>}/>
        <Route path='/addproducts' element = {<Addproducts/>}/>
        <Route path='/forgotpassword' element = {<ForgotPassword/>}/>
        <Route path='/makepayments' element = {<Makepayments/>} />
        <Route path='/verify-otp' element = {<VerifyOTP/>}/>
        <Route path='*' element = {<Notfound/>}/>
        <Route path='/test' element = {<Test/>}/>
        <Route path='/dashnavbar' element ={<Dashnavbar/>} />
        <Route path='/profile' element ={<Profile/>}/>
        <Route path='/cart' element ={<Cart/>}/>
        <Route path='/checkout' element ={<Checkout/>}/>    
        <Route path ='/aboutus' element = {<Aboutus/>} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
