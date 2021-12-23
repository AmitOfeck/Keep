const express = require('express');
const notesBL = require('../models/notesBL');

const router = express.Router();

//Get All Notes 
router.route('/').get(async (req, resp) => {
    const data = await notesBL.getAllNotes();
    return resp.json(data);
})

//Get Notes By User ID
router.route('/:id').get(async (req, resp) => {
    const id = req.params.id;
    const data = await notesBL.listNotes(id);
    return resp.json(data);
})

//Get Notes By Note ID
router.route('/:id/:noteId').get(async (req, resp) => {
    const noteId = req.params.noteId;
    const data = await notesBL.noteByNoteId(noteId);
    return resp.json(data);
})

//Get Notes By Tags 
router.route('/tags/:id/:tags').get(async (req, resp) => {
    const id = req.params.id;
    const tags = req.params.tags.split(',')
    // console.log(tags)
    const data = await notesBL.getNotesByTags(id , tags);
    return resp.json(data);
})

//Create Note
router.route('/:id').post(async (req, resp) => {

    const id = req.params.id;
    const newNote = req.body;
    const answer = await notesBL.createNote(id , newNote);

    return resp.json(answer);
})

//Delete Note
router.route('/:id/:noteId').delete(async (req , resp)=> {
    // var id = req.params.id;
    const noteId = req.params.noteId; //id of the note
    const deleteFromDB = await notesBL.deleteNote(noteId);

    return resp.json(deleteFromDB);
})

//Update Note
router.route('/:id/:noteId').put(async (req, resp) => {
    const updatedNote = req.body;
    const userId = req.params.id; //id of the user
    const noteId = req.params.noteId; //id of the note
    const answer = await notesBL.updateNote(userId ,noteId , updatedNote);
    return resp.json(answer);
})

module.exports = router;


