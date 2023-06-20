import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import { useAuth0 } from "@auth0/auth0-react";
import Jobpage from './components/Jobpage';
import Loginpage from './Loginpage';
import Jobdeatils from './components/Jobdeatils';

function App() {
  
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
          <Route path='/Jobpage' element={ isAuthenticated ? <Jobpage/> : <Loginpage/>}/>
          <Route path='/job/:id' element={<Jobdeatils/>}/>

      </Routes>
    </Router>
      
    </>
  )
}
//<Route path='/Jobpage' element={<Jobpage/>}/> : <Route path='/Loginpage' element={<Loginpage/>}/>
export default App
