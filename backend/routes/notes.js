const express = require('express')
const router = express.Router()
var userinfo = require('../middleware/userinfo')
const Notes = require('../models/Notes')
const { body, validationResult } = require('express-validator');

//Endpoint 1 : Fetching all notes.

router.get('/fetchall', userinfo, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id })
        res.json(notes)
    } catch (error) {
        res.status(400).send("Server did not rspond")
    }
})

//Endpoint 2 : Adding a note.

router.post('/addnote', userinfo, [
    body('title', 'Title min length 1').isLength({min : 1}),
    body('description', 'Description min length 1').isLength({min : 1})
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title, description, tag, user: req.user.id
        })
        const newNote = await note.save()
        res.json(newNote)
    } catch (error) {
        res.status(400).send("Server did not respond")
    }
})

// Endpoint 3 : Updating a Note

router.put('/updatenote/:id', userinfo, async (req, res) => {
    try {
        const { title, description, tag } = req.body;
        const updatednote = {};
        if(title){updatednote.title = title}
        if(description){updatednote.description = description}
        if(tag){updatednote.tag = tag}

        let note = await Notes.findById(req.params.id)
        if(!note){return res.status(400).send("Note does not exist")}
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Authorised")
        }
        note = await Notes.findByIdAndUpdate(req.params.id ,{$set : updatednote} , {new : true})
        res.json({note})
    } catch (error) {
        res.status(404).send("Server did not respond")
    }
})

// Endpoint 4 : Deleting a Note

router.delete('/deletenote/:id', userinfo, async (req, res) => {
    try {
        let note = await Notes.findById(req.params.id)
        if(!note){return res.status(400).send("Note does not exist")}
        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Authorised")
        }
        note = await Notes.findByIdAndDelete(req.params.id)
        res.send("Deleted Note")
    } catch (error) {
        res.status(404).send("Server did not respond")
    }
})

module.exports = router