import React from 'react'
import w from './w.png';
import Notes from './Notes';
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react';
import Searchresults from './Searchresults';

export default function Home() {
  const context = useContext(noteContext)
  const { addNote, notes } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" })
const [result,setResult] = useState([]);

  const handleit = ( value) => {
    let titles0 = [];
    let results = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < results.length; index++) {
     titles0[index] = results[index].title; 
  }
  let titles1 = titles0.filter((ele)=>{
    return(
      value && ele &&  ele.toLowerCase().includes(value)
    )
  }) 
  console.log(titles1)
    setResult(titles1)
  }


  const handleclick = (e) => {
    e.preventDefault()
    addNote(note.title, note.description, note.tag)
    setNote(({ title: "", description: "", tag: "" }))
  }
  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })

  }
  const [input, setInput] = useState("")
  return (
    <>
      <div className='text-white d-flex justify-content-between p-2 flex-wrap-reverse align-items-center'>
        <h2 className='d-flex justify-content-between align-items-center'>
          <img src={w} alt="eNotes" className='mx-2' height={40} width={40} />
          Add New Note
        </h2>
        <form className=" my-3" role="search" name='search'>
          <div className='d-flex align-items-center bg-white p-2 rounded'><i className="fa fa-search text-black fs-3 mx-2"></i><input className="form-control me-2 mx-2 " type="search" placeholder="Search for Notes" aria-label="Search" name='search' value={input} onChange={(e) => { setInput(e.target.value) , handleit( e.target.value) }} />
          </div>
          <Searchresults result={result}/>
          
        </form>
      </div>
      <div className="text-white mx-4 my-2">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"><h4>Title *</h4></label>
          <input type="text" className="form-control bg-transparent text-white w-50" id="exampleFormControlInput1" placeholder="" name='title' onChange={onchange} value={note.title} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label"><h4>Description *</h4></label>
          <textarea className="form-control bg-transparent text-white w-75" id="exampleFormControlTextarea1" rows="6" name='description' onChange={onchange}
            value={note.description} ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput2" className="form-label"><h4>#Tag</h4></label>
          <input type="text" className="form-control bg-transparent text-white w-50" id="exampleFormControlInput2" placeholder="" name='tag' onChange={onchange}
            value={note.tag} />
        </div>
        <button disabled={note.title.length < 1 || note.description.length < 1} type="button" className="btn btn-outline-light" onClick={handleclick}>&#9998; Add Note</button>
        <Notes />
      </div>
    </>
  )
}
