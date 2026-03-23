import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Addproducts from './Components/Addproduct';
import Getproducts from './Components/Getproducts';
import Test from './Components/Test';
import ForgotPassword from './Components/Forgotpassword';
import VerifyOTP from './Components/Verifyotp';


function App() {
  return (
    <Router>
         <div className="App">
      <header className="App-header">
        <h1>welcome to searching Limited Quality construction materials & tools. Buy new or resale.</h1>
      </header>

      
        <nav>
          <Link to="/" className='btn btn-primary btn-sm m-1'> Home</Link>
          <Link to="/Addproducts" className='btn btn-primary btn-sm m-1'>Add products</Link>
          <Link to="/signin" className='btn btn-primary btn-sm m-1'> sign in</Link>
          <Link to="/signup" className='btn btn-primary btn-sm m-1'>sign up</Link>
        </nav>


      {/* different routes binnding the rendered documents */}
      <Routes>
        <Route path='/' element = {<Getproducts/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/signin' element = {<Signin/>}/>
        <Route path='/addproducts' element = {<Addproducts/>}/>
        <Route path='/forgotpassword' element = {<ForgotPassword/>}/>
        <Route path='/verifyotp' element = {<VerifyOTP/>}/>
        <Route path='/test' element = {<Test/>}/>
      </Routes>
    </div>
    </Router>
 
  );
}

export default App;
