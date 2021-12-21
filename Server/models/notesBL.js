var notesSchema = require('./notesSchema')


const getAllNotes =  async () => {
    var data = await notesSchema.find()
    return data
}

const createNote =  async (newNote) => {

    const noteToAdd = new notesSchema({
        Id: newNote.Id ,
        Title : newNote.Title ,
        Body : newNote.Body ,
        Tags : newNote.Tags , 
        createdDate : newNote.createdDate
    })

    await noteToAdd.save()
    cosole.log(noteToAdd._id)
    return "Note added successfully"
   
}

const deleteNote = async (id) => {

     await notesSchema.findByIdAndDelete(id)
     return "Note deleted successfully"
     
 }

module.exports = {getAllNotes , createNote , deleteNote};
