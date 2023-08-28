import React from 'react'
import c from './c.png'

export default function Signup() {
    return (
        <section className='d-flex flex-wrap-reverse m-5 justify-content-center align-items-center'>
            <form  >
                <div className='my-3 '><h3 className='text-white'>New to eNotes ? SignUp</h3></div>
                <div className="mb-3 ">
                    <label htmlFor="exampleInputName" className="form-label text-white" >Name</label>
                    <input type="text" className="form-control bg-transparent text-white " id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white" >Email address</label>
                    <input type="email" className="form-control bg-transparent text-white " id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Create Password</label>
                    <input type="password" className="form-control bg-transparent text-white " id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input bg-transparent" id="exampleCheck1" />
                    <label className="form-check-label text-white" htmlFor="exampleCheck1">Done</label>
                </div>
                <button type="submit" className="btn btn-primary">SignUp</button>
            </form>
            <img src={c} alt="" height={300} width={300} className='rounded mx-5' />
        </section>
    )
}
