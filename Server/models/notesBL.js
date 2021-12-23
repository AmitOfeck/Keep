var notesSchema = require('./notesSchema')


const getAllNotes =  async () => {
    return await notesSchema.find()
}

const listNotes =  async (userId) => {
    return await notesSchema.find({UserId: userId})
}

const noteByNoteId =  async (noteId) => {
    return await notesSchema.find({_id: noteId})
}

const getNotesByTags =  async (userId , tags) => {
    return await notesSchema.find({ UserId: userId , Tags : {$in : tags} })
}

const createNote =  async ( userId , newNote) => {
    // console.log(newNote)

    const noteToAdd = new notesSchema({
        UserId: userId ,
        Title : newNote.Title ,
        Body : newNote.Body ,
        Tags : newNote.Tags , 
        createdDate : newNote.createdDate
    })
    // console.log(noteToAdd)

    await noteToAdd.save()
    return noteToAdd._id
   
}

const updateNote =  async (userId , noteId , updatedNote) => {

    const noteToUpdate = new notesSchema({

        _id : noteId ,
        UserId: userId ,
        Title : updatedNote.Title ,
        Body : updatedNote.Body ,
        Tags : updatedNote.Tags , 
        createdDate : updatedNote.createdDate
    })

    await notesSchema.findByIdAndUpdate(noteId , noteToUpdate)
    return noteToUpdate._id
   
}

const deleteNote = async (noteId) => {

     await notesSchema.findByIdAndDelete(noteId)
     return "Note deleted successfully"
     
 }

module.exports = {getAllNotes , listNotes , getNotesByTags , createNote , deleteNote , updateNote , noteByNoteId};
