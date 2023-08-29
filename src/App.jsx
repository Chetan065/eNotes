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
import NoteState from './context/notes/NoteState'
import Login from './components/Login'
import Signup from './components/Signup'
import Landing from './components/Landing'

function App() {

  return (
    <>
    
      <Router>
      <NoteState>
        <Navbar />
        
        <div className="container">
        <Routes>
          <Route path='/about' element={<>
            <About />
          </>}>
          </Route>
          <Route path='/home' element={<>
            <Home />
          </>}>
          </Route>
          <Route path='/login' element={<>
            <Login/>
          </>}>
          </Route>
          <Route path='/signup' element={<>
            <Signup/>
          </>}>
          </Route>
        </Routes>
        <Landing/>
        </div>
          
        </NoteState>
      </Router>
      
    </>
  )
}

export default App
