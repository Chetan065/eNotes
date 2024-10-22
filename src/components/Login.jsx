import React from 'react'
import u from './u.png'
import cl from './cl.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {
    const [credentials,setcredentials] = useState({email:"",password:""})
    let history = useNavigate();
    const onchange = (e)=>{
        setcredentials({...credentials , [e.target.name] : e.target.value})
      }
    const handlesubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`https://enbackend.onrender.com/api/auth/login`,{
                method :'POST',
                headers :{
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({email:credentials.email,password:credentials.password})
            })
            const json = await response.json()
            console.log(json)
            if(json.success){
                localStorage.setItem('token',json.authtoken)
                history("/home");
            }
            else{
                alert('Invalid Credentials');
            }
    }
    return (
        <section className='d-flex flex-wrap-reverse m-5 justify-content-center align-items-center'>
            <form onSubmit={handlesubmit}>
                <div className='my-3 '><h3 className='text-white'>Login to Continue to eNotes</h3></div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white" >Email address*</label>
                    <input type="email" className="form-control bg-transparent text-white " id="exampleInputEmail1" aria-describedby="emailHelp"  name='email'
                     value={credentials.email} onChange={onchange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Password*</label>
                    <input type="password" className="form-control bg-transparent text-white " id="exampleInputPassword1" name='password' value={credentials.password} onChange={onchange} required/>
                </div>
                <div className='d-flex text-white justify-content-between align-items-center flex-wrap'>
                <button type="submit" className="btn btn-light"><img src={cl} alt="" height={25} width={25} />&nbsp; Login</button>
                <Link to="/signup" className='mx-1 my-2 text-white'>Create New Account ?</Link>
                </div>
                
            </form>
            <img src={u} alt="" height={200} width={200} className='rounded mx-5' />
        </section>
    )
}
