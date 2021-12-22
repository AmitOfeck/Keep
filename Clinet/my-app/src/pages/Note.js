import React from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../App.css';
import deleteIcon from '../images/deleteIcon.jpeg';
import editIcon from '../images/editIcon.jpeg';
import Utils from './Utils/Utils';




function Note(props) {
    const params = useParams();
    const navigate = useNavigate();

    const checkDate = (date) => {

        var year = date.toString().substring(0,4)
        var month = date.toString().substring(5,7)
        var day = date.toString().substring(8,10)

        var time = day+'-'+month+'-'+year
        return time
     }

     var tagsIcons = props.data.Tags.map((tag , index) => {
         return ( <button key={index} type="button" class="btn btn-outline-secondary btn-sm">#{tag}</button> )
     })

     const del = async (UserId , noteId) => {
        var answer = await Utils.deleteNote(UserId, noteId)
        console.log(answer)
        props.callback()
     }


    return (
        <div id="note">

            <div></div>
            <div class="card mb-3" >
                <div class="row g-0">
                <div class="col-md-4">
                    <div >
                   
                        <img src={deleteIcon} width="20px" height="20px" onClick ={ () => del(props.data.UserId , props.data._id)}></img>  &nbsp;&nbsp;
                        <img src={editIcon} width="18px" height="18px" onClick={() => navigate ('/'+params.id+'/Edit/'+props.data._id)}></img>
                    </div>
  
                    {tagsIcons}


                </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">{props.data.Title}</h5>
                    <p class="card-text"> {props.data.Body} </p>
                    <p class="card-text"><small class="text-muted">{checkDate(props.data.createdDate)}</small></p>
                    </div>
                    </div>
               </div>
           </div>
           <div></div>
           
        </div>

        
    );
}

export default Note;