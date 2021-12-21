const express = require('express');
const notesBL = require('../models/notesBL');

const router = express.Router();

//Get All Notes 
router.route('/').get(async (req, resp) => {
    var data = await notesBL.getAllNotes();
    return resp.json(data);
})

//Create Note
router.route('/').post(async (req, resp) => {

    var newNote = req.body;
    var answer = await notesBL.createNote(newNote);

    return resp.json(answer);
})

//Delete Note
router.route('/:id').delete(async (req , resp)=> {
    var id = req.params.id;
    var deleteFromDB = await notesBL.deleteNote(id);

    return resp.json(deleteFromDB);
})

//Update Note
router.route('/:id').put(async (req, resp) => {
    var updatedNote = req.body;
    var id = req.params.id;
    var answer = await notesBL.updateNote(id , updatedNote);
    return resp.json(answer);
})

module.exports = router;


