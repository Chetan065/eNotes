import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import a from './a.png'
import up from './up.png'
import dl from './dl.png'

export default function Landing() {
    let navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <>
            <div className='m-5'>
                <div className='text-white  m-1 justify-content-center d-flex'>
                    <h1> &#10000; eNotes</h1>
                </div>
                <div className='text-white  m-1 justify-content-center d-flex '>
                    <h5 className='text-center'> &#8261;eNotes&#8262; is a combination of techniques that allow you to take , store and update your notes electronically in an easier way with just one-click. </h5>
                </div>
                <div className='d-flex justify-content-evenly flex-wrap'>
                    <div className="card my-2 text-white border-white bg-transparent" style={{ width: "20rem" }}>
                        <div className='d-flex justify-content-center'><img src={a} className="card-img-top m-3" alt="..." style={{ width: "10rem" }} /></div>
                        <div className="card-body">
                            <h4 className="card-title">Add a Note</h4>
                            <hr />
                            <p className="card-text">Effortlessly create new notes with our intuitive and user-friendly interface. We ensure that starting a new note is a seamless process, allowing you to capture your thoughts without any distractions.</p>
                            <Link to="/home" className="btn btn-success">Add Note</Link>
                        </div>
                    </div>
                    <div className="card my-2 bg-transparent text-white border-white" style={{ width: "20rem" }}>
                        <div className='d-flex justify-content-center'><img src={up} className="card-img-top m-3" alt="..." style={{ width: "10rem" }} /></div>
                        
                            <div className="card-body">
                                <h4 className="card-title">Update a Note</h4>
                                <hr />
                                <p className="card-text">Your ideas evolve, and so should your notes. With e-Notes, updating your notes is as simple as editing a document. Make changes, add new information, and keep your notes relevant over time.</p>
                                <Link to="/home" className="btn btn-warning">Update Note</Link>
                            </div>
                           
                    </div>
                    <div className="card my-2 text-white border-white bg-transparent" style={{ width: "20rem" }}>
                            <div className='d-flex justify-content-center'><img src={dl} className="card-img-top m-3" alt="..." style={{ width: "10rem" }} /></div>
                            
                                <div className="card-body">
                                    <h4 className="card-title">Delete a Note</h4>
                                    <hr />
                                    <p className="card-text">Not all notes are meant to be permanent. Delete outdated or irrelevant notes with confidence, knowing that our platform makes the process straightforward and stress-free.</p>
                                    <Link to="/home" className="btn btn-danger">Delete Note</Link>
                                </div>
                            
                    </div>
                </div>
                    <div className='text-white  m-2 justify-content-center d-flex'>
                        {!localStorage.getItem('token') ? <div className="btn-group m-2" role="group" aria-label="Basic outlined example">
                            <Link to="/login"><button type="button" className="btn btn-primary mx-1">Login</button></Link>
                            <Link to="/signup"><button type="button" className="btn btn-primary mx-1">SignUp</button></Link>
                        </div> : <button className='btn btn-dark mx-2 d-flex' onClick={handlelogout}>
                            <i className="fa fa-sign-out text-white fs-3" ></i> &nbsp;LogOut</button>}
                    </div>

            </div>
        </>
            
    )
}
