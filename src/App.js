import logo from './airplane.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Trello from './Pages/Trello/Trello';
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {
    return(
    <BrowserRouter>
        <div>This is Header</div>
        <a href='/'>Landing</a>
        <a href='/trello'>Trello</a>
        <Routes>
            <Route path="/trello" element={<Trello></Trello>}></Route>
            <Route path="/" element={<LandingPage />}></Route>
        </Routes>
        <div>This is Footer</div>
    </BrowserRouter>
    )
}
export default App;
