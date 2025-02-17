import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  let location = useLocation();

  const handlelogout = () =>{
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <>
    
      <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">eNotes</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/home" ? "active" : ""}`} aria-current="page" to="/home">Home-CRUD</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        {!localStorage.getItem('token')?<div className="btn-group m-2" role="group" aria-label="Basic outlined example">
        <Link to="/login"><button type="button" className="btn btn-outline-light mx-1">Login</button></Link>
        <Link to="/signup"><button type="button" className="btn btn-outline-light mx-1">SignUp</button></Link>
        </div> : <button className='btn btn-dark mx-2 d-flex' onClick={handlelogout}>
        <i className="fa fa-sign-out text-white fs-3" ></i> &nbsp;LogOut</button>}
      </nav>
      
    </>
  )
}
