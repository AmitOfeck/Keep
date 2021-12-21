const express = require('express');
const notesBL = require('../models/notesBL');

const router = express.Router();

//Get All Notes 
router.route('/').get(async (req, resp) => {
    var data = await notesBL.getAllNotes();
    return resp.json(data);
})

//Get Notes By ID
router.route('/:id').get(async (req, resp) => {
    var id = req.params.id;
    var data = await notesBL.listNotes(id);
    return resp.json(data);
})

//Get Notes By Tags 
// router.route('/:id').get(async (req, resp) => {
//     var id = req.params.id;
//     let tags = req.body.Tags;
//     var data = await notesBL.getNotesByTags(id , tags);
//     return resp.json(data);
// })

//Create Note
router.route('/:id').post(async (req, resp) => {

    var id = req.params.id;
    var newNote = req.body;
    var answer = await notesBL.createNote(id , newNote);

    return resp.json(answer);
})

//Delete Note
router.route('/:id/:noteID').delete(async (req , resp)=> {
    // var id = req.params.id;
    var noteID = req.params.noteID; //id of the note
    var deleteFromDB = await notesBL.deleteNote(noteID);

    return resp.json(deleteFromDB);
})

//Update Note
router.route('/:id/:noteID').put(async (req, resp) => {
    var updatedNote = req.body;
    var userID = req.params.id; //id of the user
    var noteID = req.params.noteID; //id of the note
    var answer = await notesBL.updateNote(userID ,noteID , updatedNote);
    return resp.json(answer);
})

module.exports = router;


