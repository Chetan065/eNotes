import React from 'react'
import e from './e.png'
import d from './d.png'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react';

export default function Note(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context;
    const { note, updateNote } = props;

    const currentDate = new Date();
    const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    };

    const formattedDateTime = currentDate.toLocaleString('en-US', options);
    
    return (
        <div>
            <div className="card text-white bg-dark border-white m-2" >
                <div className="card-body">
                    <p className="card-text">Date | {formattedDateTime}</p>
                    <h5 className="card-title d-flex justify-content-between align-items-start flex-wrap">{note.title}
                        <div>
                            <img src={e} alt="" height={30} width={30} id='edit' className='mx-1' onClick={() => { updateNote(note) }} 
                            />
                            <img src={d} alt="" height={30} width={30} id='delete' className='mx-1' onClick={() => { deleteNote(note._id) }} 
                             />
                        </div>
                    </h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text">#{note.tag}</p>
                </div>
            </div>
        </div>
    )
}
