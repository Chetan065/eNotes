import React from 'react'
import c from './c.png'
import cs from './cs.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Signup() {
    const [credentials,setcredentials] = useState({name:"",email:"",password:""})
    let history = useNavigate();
    const onchange = (e)=>{
        setcredentials({...credentials , [e.target.name] : e.target.value})
      }
    const handlesubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`,{
                method :'POST',
                headers :{
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
            })
            const json = await response.json()
            console.log(json)
            if(json.newsuc){
                localStorage.setItem('token',json.authtoken)
                history("/home");
            }
            else{
                alert('user already exist with the provided email');
            }
    }
    return (
        <section className='d-flex flex-wrap-reverse m-5 justify-content-center align-items-center'>
            <form onSubmit={handlesubmit} >
                <div className='my-3 '><h3 className='text-white'>New to eNotes ? SignUp</h3></div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label text-white" >Name* &nbsp;atleast 4 chars</label>
                    <input type="text" className="form-control bg-transparent text-white " id="exampleInputName" aria-describedby="emailHelp" value={credentials.name} onChange={onchange} name='name'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-white" >Email address*</label>
                    <input type="email" className="form-control bg-transparent text-white " id="exampleInputEmail1" aria-describedby="emailHelp" value={credentials.email} onChange={onchange} name='email'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-white">Create Password* &nbsp; atleast 8 chars</label>
                    <input type="password" className="form-control bg-transparent text-white " id="exampleInputPassword1" value={credentials.password} onChange={onchange} name='password' />
                </div>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <button type="submit" className="btn btn-light align-items-center p-2" disabled={credentials.name.length<4 || credentials.password.length<8 || credentials.email.length<1}>
                    <img src={cs} alt="" height={30} width={30} />&nbsp; SignUp</button>
                <Link to='/login' className='mx-2'>Already Created ? SignIn</Link>
                </div>
                
            </form>
            <img src={c} alt="" height={200} width={200} className=' mx-5' />
        </section>
    )
}
