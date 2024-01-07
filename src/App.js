import Navbar from './components/Navbar.js'
import Home from "./pages/Home.js"
import Login from './pages/Login.js'
import Signup from "./pages/Signup.js"
import Dashboard from "./pages/Dashboard.js"
import PrivateRoute from "./components/PrivateRoute"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

  

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(false); 
  return (
    <div className=" App w-screen h-screen bg-richblack-900 flex flex-col overflow-x-hidden">
      <Navbar isLoggedIn= {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} /> 
      

      {/*......................Routes...............  */}

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login  setIsLoggedIn = {setIsLoggedIn} />}/>
        <Route path='/signup' element={<Signup  setIsLoggedIn = {setIsLoggedIn}/>}/>
        <Route path='/dashboard' element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
        } />
        <Route path='*' element={<div>page not found</div>}/>
      </Routes>
    </div>
  );
}

export default App;
