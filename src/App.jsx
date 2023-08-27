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
        </Routes>
        </div>
        </NoteState>
      </Router>
      
    </>
  )
}

export default App
