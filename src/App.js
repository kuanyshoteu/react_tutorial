import logo from './airplane.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Trello from './Pages/Trello/Trello';
import LandingPage from './Pages/LandingPage/LandingPage'
import Header from './CommonComponents/Header';

function App() {
    function showButton(){
        let hiddenButton1 = document.getElementById('hiddenButton1').classList.remove('hidden')
        wedwedw
    }
    function hideButton(event){
        let hiddenButton1 = document.getElementById('hiddenButton1').classList.add('hidden')
    }
    return(
    <BrowserRouter>
        <Header />
        <div > {"<"} </div>
        <div className='bg-secondary p-2 text-dark bg-opacity-10'>
            <Routes>
                <Route path="/trello" element={<Trello logo={logo}></Trello>}></Route>
                <Route path="/" element={<LandingPage logo={logo}/>}></Route>
                <Route path="/gladiator" element={<LandingPage logo={logo}/>}></Route>
            </Routes>
            <div className='d-flex centered mt-16'>
                <div className='d-flex centered w-50 shadow-sm p-3 mb-5 bg-body rounded'>
                    <img onMouseLeave={hideButton} onMouseOver={showButton} src='/images/logo192.png'></img>
                    <div onMouseOver={showButton} id='hiddenButton1' className='hidden bg-secondary position-absolute mt-5'>
                        <div>Text</div>
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}
export default App;
