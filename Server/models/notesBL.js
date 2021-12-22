var notesSchema = require('./notesSchema')


const getAllNotes =  async () => {
    return await notesSchema.find()
}

const listNotes =  async (id) => {
    return await notesSchema.find({UserId: id})
}

const noteByNoteId =  async (noteId) => {
    return await notesSchema.find({_id: noteId})
}

const getNotesByTags =  async (id , tags) => {
    return await notesSchema.find({ UserId: id , Tags : {$in : tags} })
}

const createNote =  async ( id , newNote) => {
    // console.log(newNote)

    const noteToAdd = new notesSchema({
        UserId: id ,
        Title : newNote.Title ,
        Body : newNote.Body ,
        Tags : newNote.Tags , 
        createdDate : newNote.createdDate
    })
    // console.log(noteToAdd)

    await noteToAdd.save()
    return noteToAdd._id
   
}

const updateNote =  async (userID , noteID , updatedNote) => {

    const noteToUpdate = new notesSchema({

        _id : noteID ,
        UserId: userID ,
        Title : updatedNote.Title ,
        Body : updatedNote.Body ,
        Tags : updatedNote.Tags , 
        createdDate : updatedNote.createdDate
    })

    await notesSchema.findByIdAndUpdate(noteID , noteToUpdate)
    return noteToUpdate._id
   
}

const deleteNote = async (noteID) => {

     await notesSchema.findByIdAndDelete(noteID)
     return "Note deleted successfully"
     
 }

module.exports = {getAllNotes , listNotes , getNotesByTags , createNote , deleteNote , updateNote , noteByNoteId};
