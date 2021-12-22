import axios from "axios";

const listNotes = async (id) => {
    var resp = await axios.get("http://localhost:8000/notes/"+id)
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

export default {listNotes , addNote , deleteNote}