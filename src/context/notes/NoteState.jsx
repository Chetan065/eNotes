import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";


const NoteState = (props)=>{
    const notesinitial = []
        const [notes , setNotes] = useState(notesinitial)

        // Fetch All
        const fetchNotes= async ()=>{
            const response = await fetch(`https://enbackend.onrender.com/api/notes/fetchall`,{
                method :'GET',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : localStorage.getItem('token')
                }
                
            })
            
            const json = await response.json();
            
            
            setNotes(json)
            
        }
             
        //Add Note
        const addNote= async (title,description,tag)=>{
            const response = await fetch(`https://enbackend.onrender.com/api/notes/addnote`,{
                method :'POST',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : localStorage.getItem('token')
                },
                body : JSON.stringify({title,description,tag})
            })
            const json = await response.json();
            const note = {
                "_id": json._id,   // Use the _id from the JSON response
                "user": json.user, // Use the user from the JSON response
                "title": title,
                "tag": tag,
                "description": description,
                "date": json.date, // Use the date from the JSON response
                "__v": json.__v    // Use the __v from the JSON response
              }   
            setNotes(notes.concat(note))
        }
        //Delete Note
        const deleteNote= async (id)=>{
            const response = await fetch(`https://enbackend.onrender.com/api/notes/deletenote/${id}`,{
                method :'DELETE',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : localStorage.getItem('token')
                },
                
            })
            setNotes(notes.filter((note)=>{return note._id !== id}))
        }

        //Update Note
        const updateNotes= async (id,title,description,tag)=>{
            const response = await fetch(`https://enbackend.onrender.com/api/notes/updatenote/${id}`,{
                method :'PUT',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : localStorage.getItem('token')
                },

                body : JSON.stringify({id,title,description,tag})
            })
            const json = response.json;

            let newNotes = JSON.parse(JSON.stringify(notes))
            for (let index = 0; index < newNotes.length; index++) {
                const element = newNotes[index];
                if(element._id === id){
                    newNotes[index].title = title;
                    newNotes[index].description = description;
                    newNotes[index].tag = tag;
                    break;
                }
                
            }
            setNotes(newNotes)
        }
        return(
            <NoteContext.Provider value={{notes,addNote,deleteNote,updateNotes,fetchNotes}}>
                {props.children}
            </NoteContext.Provider>
        )
          
    }
    


export default NoteState;