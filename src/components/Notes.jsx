import React from 'react'
import Note from './Note'
import { useContext, useEffect , useRef,useState} from 'react'
import noteContext from '../context/notes/noteContext'
import { useNavigate } from 'react-router-dom'

export default function Notes() {
    let navigate = useNavigate();
    const context = useContext(noteContext)
    const { notes, fetchNotes ,updateNotes } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
            fetchNotes();
        }
        else{
            navigate('/login')
        }
        
    }, [])
    const ref = useRef(null)
    const ref1 = useRef(null)
    const updateNote = (currentNote) => {
        ref.current.click()
        setNote({id:currentNote._id ,etitle:currentNote.title , edescription : currentNote.description , etag : currentNote.tag})
    }
    const [note,setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
    const handleclick =(e)=>{
        e.preventDefault()
        updateNotes(note.id , note.etitle , note.edescription , note.etag)
        ref.current.click()
        // addNote(note.title,note.description,note.tag)
      }
      const onchange = (e)=>{
        setNote({...note , [e.target.name] : e.target.value})
      }
    return (
        <>

            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-black" id="exampleModalLabel">Update Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label"><h4 className='text-black'>Title *</h4></label>
                                <input type="text" className="form-control bg-transparent  " id="title" placeholder="" name='etitle' onChange={onchange} value={note.etitle} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label"><h4 className='text-black'>Description *</h4></label>
                                <textarea className="form-control bg-transparent  " id="description" rows="6" name='edescription' onChange={onchange} value={note.edescription} ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label"><h4 className='text-black'>#Tag</h4></label>
                                <input type="text" className="form-control bg-transparent " id="tag" placeholder="" name='etag' onChange={onchange} 
                                value={note.etag} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={ref1}>Close</button>
                            <button disabled={note.etitle.length<1 || note.edescription.length<1} type="button" className="btn btn-dark" onClick={handleclick}>Save Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white my-3'>
                <h3>Your Notes</h3>
            </div>
            <div className='d-flex flex-wrap justify-content-start'>
                {notes.length ===0 && 'No Notes Added Yet!'}
                {notes.map((note) => {
                    return <Note note={note} updateNote={updateNote} key={note._id} />
                })}

            </div>
        </>
    )
}
