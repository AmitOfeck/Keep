var notesSchema = require('./notesSchema')


const getAllNotes =  async () => {
    var data = await notesSchema.find()
    return data
}

const listNotes =  async (id) => {
    var data = await notesSchema.find({UserId: id})
    return data
}

const getNotesByTags =  async (id , tags) => {
    var data = await notesSchema.find({ UserId: id , Tags : tags })
    return data
}

const createNote =  async ( id , newNote) => {

    const noteToAdd = new notesSchema({
        UserId: id ,
        Title : newNote.Title ,
        Body : newNote.Body ,
        Tags : newNote.Tags , 
        createdDate : newNote.createdDate
    })

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

module.exports = {getAllNotes , listNotes , getNotesByTags , createNote , deleteNote , updateNote};
