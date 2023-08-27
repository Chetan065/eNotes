import React from 'react'
import w from './w.png';
import Notes from './Notes';
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react';

export default function Home() {
  const context = useContext(noteContext)
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" })

  const handleclick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote(({ title: "", description: "", tag: "" }))
  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
    
  }
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
          <input type="text" className="form-control bg-transparent text-white w-50" id="exampleFormControlInput1" placeholder="" name='title' onChange={onchange} value={note.title}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Description *</h4></label>
          <textarea className="form-control bg-transparent text-white w-75" id="exampleFormControlTextarea1" rows="6" name='description' onChange={onchange} 
          value={note.description} ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label"><h4>#Tag</h4></label>
          <input type="text" className="form-control bg-transparent text-white w-50" id="exampleFormControlInput2" placeholder="" name='tag' onChange={onchange} 
          value={note.tag}/>
        </div>
        <button  disabled ={note.title.length <1 || note.description.length<1} type="button" className="btn btn-outline-light" onClick={handleclick}>&#9998; Add Note</button>
        <Notes />
      </div>
    </>
  )
}
