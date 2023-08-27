import React from 'react'
import Note from './Note'
import { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

export default function Notes() {
    const context = useContext(noteContext)
    const {notes,fetchNotes} = context;
    useEffect(()=>{
fetchNotes();
    },[])
  return (
    <>
    <div className='text-white my-3'>
        <h3>Your Notes</h3>
    </div>
    <div className='d-flex flex-wrap justify-content-start'>
        {notes.map((note)=>{
            return <Note note = {note} key={note._id}/>
        })}
        
    </div>
    </>
  )
}
