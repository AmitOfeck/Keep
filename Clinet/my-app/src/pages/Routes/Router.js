import React from 'react';
import {Routes, Route} from 'react-router-dom'
import EditNote from '../EditNote';
import InsertNote from '../InsertNote';
import Main from '../Main';


function Router(props) {
    return (
        <div>
            <Routes>
            <Route path="/:id" exact element={<Main/>}/>
            <Route path="/:id/addNote" exact element={<InsertNote/>}/>
            <Route path="/:id/Edit/:noteId" exact element={<EditNote/>}/>
            </Routes>
        </div>
    );
}

export default Router;