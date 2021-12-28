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

    const push = () => {
        var arr = [...tagsArr]
        arr.push(tag)
        setTagsArr(arr)
        setTag("")
    }

    const deleteTag = (tagName) => {
        var arr = tagsArr.filter((exist) => exist != tagName)
        setTagsArr(arr)   
    }

    var floatHashtags = tagsArr.map((tag , index) => {
        return(<div>
             <button key={index} value={tag} type="button" class="btn btn-primary" onClick={(e) => deleteTag(e.target.value)}> #{tag}</button> &nbsp;
             </div>)
    })

    const search = () => {
        props.search(tagsArr)
    }



    return (
        <div >
            <nav class="navbar navbar-dark bg-dark" id="navBar">
                 <div class="container-fluid">
                    <a class="navbar-brand">
                    <img src={write} alt="" width="45" height="36" class="d-inline-block align-text-top"/> &nbsp;
                    Keep 
                    </a>
                 </div>

                 <div id="tagsNav">
                 {floatHashtags}
                 </div>

                 <div class="container-fluid">
                      <form class="d-flex">
                      <input class="form-control me-2" value={tag} type="search" placeholder="Serach Tag" aria-label="Search" onChange={(e)=> setTag(e.target.value)} />
                      <button type="button" class="btn btn-outline-primary" onClick={() => push()}>Tag</button> &nbsp;
                      <button type="button" class="btn btn-outline-success" onClick={search}>Serach</button>
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