import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import write from '../images/write.jpeg';
import '../App.css';
import Utils from './Utils/Utils';



function InsertNote(props) {
    const params = useParams();
    const navigate = useNavigate();

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    var today2 = mm + '/' + dd + '/' + yyyy;
    today2 = new Date(today2);

    const [note , setNote] = useState({
        UserId : params.id ,
        Title: "" ,
        Body: "",
        Tags : [] ,
        createdDate : today2
    })
    const [tag , setTag] = useState("")


    const save = async () => {
        if(note.Title == "" || note.Body == "" || note.Tags.length == 0)
        {
            alert("Mission information")
        }
        else
        {
           var answer = await Utils.addNote(params.id , note)
           console.log(answer)
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
                     <h3 id="white">Add Note</h3>
                 </div>

                 <div class="container-fluid">
                 </div>
           </nav>
<br/>
        <div id="add">
        <div></div>
 
        <div>
        <div class="form-floating" >
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setNote({...note , Title : e.target.value})}></textarea>
        <label for="floatingTextarea">Title</label>
        </div> <br/>

        <div class="form-floating">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" onChange={(e) => setNote({...note , Body : e.target.value})}></textarea>
        <label for="floatingTextarea2">Body</label>
        </div>
        <br/>

        <input type="text" placeholder="Write Tag" value={tag} onChange={(e) => setTag(e.target.value)} /> &nbsp;
        <button type="button" class="btn btn-outline-primary" onClick={() =>{
         var arr = [...note.Tags]
         arr.push(tag)
         setNote({...note , Tags : arr})
         setTag("")
        }}>Tag</button>

        <br/>
        <p class="card-text"><small class="text-muted">{today}</small></p>
        <br/>
        <button type="button" class="btn btn-outline-danger" onClick={() => navigate ('/'+params.id)}>cancel</button> &nbsp; &nbsp;
        <button type="button" class="btn btn-outline-success" onClick={() => save()}>Save</button>


        </div>

        <div></div>
        </div>


        </div>
    );
}

export default InsertNote;