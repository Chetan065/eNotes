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
          <Route path='/about' element={
            <About />
          }/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={
            <Home />
          }/>
          <Route path='/login' element={
            <Login/>
          }/>
          <Route path='/signup' element={
            <Signup/>
          }/>
        </Routes>
        </div>
          
        </NoteState>
      </Router>
      
    </>
  )
}

export default App
