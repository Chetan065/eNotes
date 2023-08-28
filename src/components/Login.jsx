import React from 'react'
import u from './u.png'

export default function Login() {
    return (
        <section className='d-flex flex-wrap-reverse m-5 justify-content-center align-items-center'>
            <form  >
                <div className='my-3 '><h3 className='text-white'>Login to Continue to eNotes</h3></div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white" >Email address</label>
                    <input type="email" className="form-control bg-transparent text-white " id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                    <input type="password" className="form-control bg-transparent text-white " id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <img src={u} alt="" height={300} width={300} className='rounded mx-5' />
        </section>
    )
}
