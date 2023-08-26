import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/about' element={<>
            <About />
          </>}>
          </Route>
          <Route path='/home' element={<>
            <Home />
          </>}>
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
