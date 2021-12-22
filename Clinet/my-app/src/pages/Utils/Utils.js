import axios from "axios";

const listNotes = async (id) => {
    var resp = await axios.get("http://localhost:8000/notes/"+id)
    return resp.data
}

const serachByTag = async (userId , tagsString) => {
    var resp = await axios.get("http://localhost:8000/notes/tags/"+userId+"/"+tagsString)
    return resp.data
}

const addNote = async (id , note) => {
    var resp = await axios.post("http://localhost:8000/notes/"+id , note)
    return resp.data
}

const deleteNote = async (id , noteId) => {
    var resp = await axios.delete("http://localhost:8000/notes/"+id+"/"+noteId)
    return resp.data
}

const noteByNoteId = async (userId , NoteId) => {
    var resp = await axios.get("http://localhost:8000/notes/"+userId+"/"+NoteId)
    return resp.data
}

const updateNote = async (userId , NoteId , updatedNoteObj) => {
    var resp = await axios.put("http://localhost:8000/notes/"+userId+"/"+NoteId , updatedNoteObj)
    return resp.data
}


export default {listNotes , addNote , deleteNote , noteByNoteId , updateNote , serachByTag}