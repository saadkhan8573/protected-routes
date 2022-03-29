import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Login from './Login'
import Navbar from './Navbar'
import {ProtectedRoutes,ProtectedLoggedin,ProtectedUserAuth} from './ProtectedRoutes'

const App = () => {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route element={<ProtectedRoutes/>}>
              <Route path="/" element={<Home/>} />
              <Route element={<ProtectedUserAuth/>}>
                <Route path="/about" element={<About/>} />
              </Route>
            </Route>
            <Route element={<ProtectedLoggedin/>}>
              <Route path="/login" element={<Login/>} />
            </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App
