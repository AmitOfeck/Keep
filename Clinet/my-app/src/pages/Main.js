import React, { useEffect, useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'
import '../App.css';
import Nav from './Nav';
import Note from './Note';
import Utils from './Utils/Utils';


function Main(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [notes , setNotes] = useState([])
    const [change , setChange] = useState(false)

    useEffect(async () => {
        var answer = await Utils.listNotes(params.id)
        setNotes(answer)
    } ,[])

    useEffect(async () => {
        var answer = await Utils.listNotes(params.id)
        setNotes(answer)
    } ,[change])

    const changeFunc = () => {
        setChange(!change)
    }


    var stickyNotes = notes.map((note , index) => {
        return(<Note key={index} data={note} callback={changeFunc}/>)
    })

    

    return (
        <div>

          <Nav/>
          <br/>

          <div id="orderNotes">
          {stickyNotes}
           </div>

        </div>
    );
}

export default Main;