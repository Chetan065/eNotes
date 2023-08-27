import React from 'react'
import e from './e.png'
import d from './d.png'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react';

export default function Note(props) {
    const context = useContext(noteContext)
    const {updateNote,deleteNote} = context;
    const {note} = props;

    
    const updatenote = ()=>{

    }
    return (
        <div>
            <div className="card text-white bg-dark border-white m-2" style={{width: "35rem"}}>
                <div className="card-body">
                <p className="card-text">{note.date}</p>
                    <h5 className="card-title d-flex justify-content-between align-items-start flex-wrap">Title : {note.title}
                    <div>
                        <img src={e} alt="" height={30} width={30} id='edit' className='mx-1'onClick={updatenote}/>
                        <img src={d} alt="" height={30} width={30} id='delete' className='mx-1' onClick={()=>{deleteNote(note._id)}}/>
                    </div>
                    </h5>
                    <p className="card-text">Description : {note.description}</p>
                    <p className="card-text">#Tag : {note.tag}</p>
                </div>
            </div>
        </div>
    )
}
