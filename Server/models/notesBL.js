var notesSchema = require('./notesSchema')


const getAllNotes =  async () => {
    var data = await notesSchema.find()
    return data
}

const createNote =  async (newNote) => {

    const noteToAdd = new notesSchema({
        UserId: newNote.UserId ,
        Title : newNote.Title ,
        Body : newNote.Body ,
        Tags : newNote.Tags , 
        createdDate : newNote.createdDate
    })

    await noteToAdd.save()
    return noteToAdd._id
   
}

const updateNote =  async ( id , updatedNote) => {

    const noteToUpdate = new notesSchema({

        _id : id ,
        UserId: updatedNote.UserId ,
        Title : updatedNote.Title ,
        Body : updatedNote.Body ,
        Tags : updatedNote.Tags , 
        createdDate : updatedNote.createdDate
    })

    await notesSchema.findByIdAndUpdate(id , noteToUpdate)
    return noteToUpdate._id
   
}

const deleteNote = async (id) => {

     await notesSchema.findByIdAndDelete(id)
     return "Note deleted successfully"
     
 }

module.exports = {getAllNotes , createNote , deleteNote , updateNote};
