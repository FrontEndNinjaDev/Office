import React, { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Blog from './Components/Blog';
import Projects from './Components/Projects';
import About from './Components/About';
import Signup from './Components/Signup';
import Login  from './Components/Login';
import UserProfile from './Components/UserProfile';

const App = () => {

const [isAuthenticated, setIsAuthenticated] = useState(false);

const handleLogin = () => {
  setIsAuthenticated(true)
}

const handleLogout = () =>{
  setIsAuthenticated(false)
}

  return (
    <Router>
    <div>
      <Navbar isAuthenticated={isAuthenticated} onLogout = {handleLogout}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/signup" element={<Signup onSignup = {handleLogin}/>}/>
        <Route path="/login" element={<Login onLogin = {handleLogin}/>}/>
        <Route path="/user-profile" element={<UserProfile/>}/>
        <Route />
        <Route />
      </Routes>
    </div>
    </Router>
  )
}

export default App
