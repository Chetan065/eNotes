import React from 'react'
import w from './w.png';
import Notes from './Notes';

export default function Home() {
  return (
    <>
      <div className='text-white d-flex justify-content-between m-4 flex-wrap-reverse align-items-center'>
        <h2 className='d-flex justify-content-between align-items-center'>
          <img src={w} alt="eNotes" className='mx-2' height={40} width={40} />
          Add New Note
        </h2>
        <form className="d-flex h-50 my-3" role="search" name='search'>
          <input className="form-control me-2" type="search" placeholder="Search for Notes" aria-label="Search" />
          <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
      </div>
      <div className="text-white mx-4 my-2">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><h4>Title *</h4></label>
          <input type="text" className="form-control bg-transparent text-white w-50" id="exampleFormControlInput1" placeholder="" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Description *</h4></label>
          <textarea className="form-control bg-transparent text-white w-75" id="exampleFormControlTextarea1" rows="6"  ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label"><h4>#Tag</h4></label>
          <input type="text" className="form-control bg-transparent text-white w-50" id="exampleFormControlInput2" placeholder="" />
        </div>
        <button type="button" className="btn btn-outline-light">&#9998; Add Note</button>
        <Notes/>
      </div>
    </>
  )
}
