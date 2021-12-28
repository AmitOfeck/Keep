import React from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../App.css';
import deleteIcon from '../images/deleteIcon.jpeg';
import editIcon from '../images/editIcon.jpeg';
import Utils from './Utils/Utils';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';




function Note(props) {
    const params = useParams();
    const navigate = useNavigate();

    const visionDate = (date) => {

        var year = date.toString().substring(0,4)
        var month = date.toString().substring(5,7)
        var day = date.toString().substring(8,10)

        var time = day+'/'+month+'/'+year
        return time
     }

    const checkDate = (date) => {

        var year = date.toString().substring(0,4)
        var month = date.toString().substring(5,7)
        var day = date.toString().substring(8,10)

        var time = month+'/'+day+'/'+year
        return time
     }

     var today = new Date();
     var dd = String(today.getDate()).padStart(2, '0');
     var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
     var yyyy = today.getFullYear();
     today =  mm + '/' + dd + '/' + yyyy;


     const checkTimeDifference = (start , end) => {
        const date1 = new Date(start);
        const date2 = new Date(end);
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = date2.getTime() - date1.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);
        return(diffInDays);
     }

     var classTime = "";
     const num = checkTimeDifference(checkDate(props.data.createdDate) , today)
     console.log(num)
     if (num <= 7)
     classTime = "greenNote";
     else if (num > 7 && num <= 30)
     classTime = "yellowNote";
     else
     {
        classTime = "redNote";
     }

     var tagsIcons = props.data.Tags.map((tag , index) => {
         return ( <button key={index} type="button" class="btn btn-outline-secondary btn-sm" id="black">#{tag}</button> )
     })

     const del = async (UserId , noteId) => {
        var answer = await Utils.deleteNote(UserId, noteId)
        console.log(answer)
        props.callback()
     }


    return (
        <div id="note" >

            <div></div>
            <div class="card mb-3"  class={classTime}>
                <div class="row g-0" >
                <div class="col-md-4">
                    <div >
                    <Tooltip title="Delete">
                    <IconButton>
                    <img src={deleteIcon} width="20px" height="20px" onClick ={ () => del(props.data.UserId , props.data._id)}></img>
                    </IconButton>
                    </Tooltip>

                    <Tooltip title="Edit">
                    <IconButton>
                    <img src={editIcon} width="18px" height="18px" onClick={() => navigate ('/'+params.id+'/Edit/'+props.data._id)}></img>                    </IconButton>
                    </Tooltip>
                   
                        
                    </div>
                    <br/>
                    {tagsIcons}


                </div>
                    <div class="col-md-8">
                    <div class="card-body">
                    <h5 class="card-title">{props.data.Title}</h5>
                    <p class="card-text"> {props.data.Body} </p>
                    <p class="card-text"><small class="text-muted">{visionDate(props.data.createdDate)}</small></p>
                    </div>
                    </div>
               </div>
           </div>
           <div></div>
           
        </div>

        
    );
}

export default Note;