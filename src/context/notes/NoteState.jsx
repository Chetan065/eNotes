import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesinitial = [
        
            {
              "_id": "64eb2191d7ab28111faa3227",
              "user": "64e9f16a809bfe554192cb5b",
              "title": "My Title",
              "tag": "New Note",
              "description": "My Description",
              "date": "2023-08-27T10:12:33.477Z",
              "__v": 0
            },
            {
              "_id": "64eb21a0d7ab28111faa3229",
              "user": "64e9f16a809bfe554192cb5b",
              "title": "My Title 1",
              "tag": "New Note 1",
              "description": "My Description 1",
              "date": "2023-08-27T10:12:48.566Z",
              "__v": 0
            },
            {
              "_id": "64eb21abd7ab28111faa322b",
              "user": "64e9f16a809bfe554192cb5b",
              "title": "My Title 2",
              "tag": "New Note 2",
              "description": "My Description 2",
              "date": "2023-08-27T10:12:59.857Z",
              "__v": 0
            }
        ]
        const [notes , setNotes] = useState(notesinitial)
        return(
            <NoteContext.Provider value={{notes,setNotes}}>
                {props.children}
            </NoteContext.Provider>
        )
          
    }
    


export default NoteState;