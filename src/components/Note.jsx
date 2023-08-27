import React from 'react'
import e from './e.png'
import d from './d.png'

export default function Note(props) {
    const {note} = props;
    return (
        <div>
            <div className="card text-white bg-dark border-white m-2" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title d-flex justify-content-between align-items-start">{note.title}
                    <div>
                        <img src={e} alt="" height={30} width={30} id='edit' className='mx-1'/>
                        <img src={d} alt="" height={30} width={30} id='delete' className='mx-1'/>
                    </div>
                    </h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text">#{note.tag}</p>
                </div>
            </div>
        </div>
    )
}
