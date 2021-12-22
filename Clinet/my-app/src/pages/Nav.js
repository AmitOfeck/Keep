import React, { useState } from 'react';
import { useNavigate , useParams } from 'react-router-dom'

import write from '../images/write.jpeg';
// import plus from '../images/plus.jpeg';
import '../App.css';



function Nav(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [tag , setTag] = useState("")
    const [tagsArr , setTagsArr] = useState([])


    return (
        <div >
            <nav class="navbar navbar-dark bg-dark" id="navBar">
                 <div class="container-fluid">
                    <a class="navbar-brand">
                    <img src={write} alt="" width="45" height="36" class="d-inline-block align-text-top"/> &nbsp;
                    Keep 
                    </a>
                 </div>

                 <div></div>

                 <div class="container-fluid">
                      <form class="d-flex">
                      <input class="form-control me-2" type="search" placeholder="Serach Tag" aria-label="Search" onChange={(e)=> setTag(e.target.value)} />
                      <button type="button" class="btn btn-outline-primary" >Tag</button> &nbsp;
                      <button class="btn btn-outline-success" >Search</button>
                      </form>
                 </div>
                 <button type="button" class="btn btn-outline-light" id="plus" onClick={() => navigate ('/'+params.id+'/addNote')}>+</button> 
                 <div>

                 </div>
           </nav>
        </div>
    );
}

export default Nav;