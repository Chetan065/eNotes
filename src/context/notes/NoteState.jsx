import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";
import { json } from "react-router-dom";

const NoteState = (props)=>{
    const notesinitial = []
        const [notes , setNotes] = useState(notesinitial)

        // Fetch All
        const fetchNotes= async ()=>{
            const response = await fetch(`http://localhost:5000/api/notes/fetchall`,{
                method :'GET',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlOWYxNmE4MDliZmU1NTQxOTJjYjViIn0sImlhdCI6MTY5MzA1NTY1OX0.Z7EChT5F87OYak-7cuuVfv7s3LH9Fsgm5I_Y2eZnqG4'
                }
                
            })
            
            const json = await response.json();
            setNotes(json)
            
        }
             
        //Add Note
        const addNote= async (title,description,tag)=>{
            const response = await fetch(`http://localhost:5000/api/notes/addnote`,{
                method :'POST',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlOWYxNmE4MDliZmU1NTQxOTJjYjViIn0sImlhdCI6MTY5MzA1NTY1OX0.Z7EChT5F87OYak-7cuuVfv7s3LH9Fsgm5I_Y2eZnqG4'
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
            const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`,{
                method :'DELETE',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlOWYxNmE4MDliZmU1NTQxOTJjYjViIn0sImlhdCI6MTY5MzA1NTY1OX0.Z7EChT5F87OYak-7cuuVfv7s3LH9Fsgm5I_Y2eZnqG4'
                },
                
            })
            setNotes(notes.filter((note)=>{return note._id !== id}))
        }

        //Update Note
        const updateNote= async (id,title,description,tag)=>{
            const response = await fetch(`http://localhost:5000/api/notes/updatenote/${id}`,{
                method :'PUT',
                headers :{
                    'Content-Type' : 'application/json',
                    'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlOWYxNmE4MDliZmU1NTQxOTJjYjViIn0sImlhdCI6MTY5MzA1NTY1OX0.Z7EChT5F87OYak-7cuuVfv7s3LH9Fsgm5I_Y2eZnqG4'
                },

                body : json.stringyfy({id,title,description,tag})
            })
            const json = response.json;
       
            for (let index = 0; index < notes.length; index++) {
                const element = notes[index];
                if(element._id === id){
                    element.title = title;
                    element.description = description;
                    element.tag = tag;
                }
                
            }
        }
        return(
            <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote,fetchNotes}}>
                {props.children}
            </NoteContext.Provider>
        )
          
    }
    


export default NoteState;