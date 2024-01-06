import Navbar from './components/Navbar.js'
import Home from "./pages/Home.js"
import Login from './pages/Login.js'
import Signup from "./pages/Signup.js"
import Dashboard from "./pages/Dashboard.js"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

  

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(false); 
  return (
    <div className="App">
      <Navbar isLoggedIn= {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} /> 
      

      {/*......................Routes...............  */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login  setIsLoggedIn = {setIsLoggedIn} />}/>
        <Route path='/signup' element={<Signup  setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='*' element={<div>page not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
