import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import write from '../images/write.jpeg';
import '../App.css';
import Utils from './Utils/Utils';


function EditNote(props) {

  const params = useParams();
    const navigate = useNavigate();

    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = date.getFullYear();
    const createDate = year + '/' + month + '/' + day;

    const [note , setNote] = useState({
        UserId : params.id ,
        Title: "" ,
        Body: "",
        Tags : [] ,
        createdDate : createDate
    })
    const [tag , setTag] = useState("")

    useEffect(async () => {
        var answer = await Utils.noteByNoteId(params.id , params.noteId)
        setNote(answer[0])
    } ,[])

    const deleteTag = (tagName) => {
        var arr = note.Tags.filter((exist) => exist != tagName)
        setNote({...note , Tags : arr})   
    }

    var floatHashtags = note.Tags.map((tag , index) => {
        return(<div>
             <button key={index} value={tag} type="button" class="btn btn-outline-secondary btn-sm" onClick={(e) => deleteTag(e.target.value)}> #{tag}</button> 
             </div>)
    })

    const update = async () => {
        if(note.Title == "" || note.Body == "" || note.Tags.length == 0)
        {
            alert("Mission information")
        }
        else
        {
           await Utils.updateNote(params.id ,note._id ,  note)
           navigate ('/'+params.id)
        }
    }



    return (
        <div>
              <nav class="navbar navbar-dark bg-dark" id="navBar2">
                 <div class="container-fluid">
                    <a class="navbar-brand">
                    <img src={write} alt="" width="45" height="36" class="d-inline-block align-text-top"/> &nbsp;
                    Keep Sheets
                    </a>
                 </div>

                 <div>
                     <h3 id="white">Edit Note</h3>
                 </div>

                 <div class="container-fluid">
                 </div>
           </nav>

           <br/>
        <div id="add">
        <div></div>
 
        <div>
        <div class="form-floating" >
        <textarea class="form-control" value={note.Title} placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setNote({...note , Title : e.target.value})}></textarea>
        <label for="floatingTextarea">Title</label>
        </div> <br/>

        <div class="form-floating">
        <textarea class="form-control" value={note.Body} placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => setNote({...note , Body : e.target.value})}></textarea>
        <label for="floatingTextarea2">Body</label>
        </div>
        <br/>

        <input type="text" placeholder="Write Tag" value={tag} onChange={(e) => setTag(e.target.value)} /> &nbsp;
        <button type="button" class="btn btn-outline-primary" onClick={() => {
         var arr = [...note.Tags]
         arr.push(tag)
         setNote({...note , Tags : arr})
         setTag("")
        }}>Tag</button>

        <br/>
        <p class="card-text"><small class="text-muted">{date}</small></p>
        {floatHashtags}
        <br/> <br/>
        <button type="button" class="btn btn-outline-danger" onClick={() => navigate ('/'+params.id)}>cancel</button> &nbsp; &nbsp;
        <button type="button" class="btn btn-outline-success" onClick={() => update()}>Update</button>


        </div>

        <div></div>
        </div>

        </div>
    );
}

export default EditNote;