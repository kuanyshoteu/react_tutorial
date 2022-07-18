import logo from './airplane.png';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Trello from './Pages/Trello/Trello';
import LandingPage from './Pages/LandingPage/LandingPage'
import Header from './CommonComponents/Header';
import Footer from './CommonComponents/Footer';

function App() {
    let [countId, setCountId] = React.useState(10)
    function showButton(){
        let hiddenButton1 = document.getElementById('hiddenButton1').classList.remove('hidden')

    }
    function hideButton(event){
        let hiddenButton1 = document.getElementById('hiddenButton1').classList.add('hidden')
    }
    return(
    <BrowserRouter>
        <div className='container-md'>
            <Header setCountId={setCountId}/>
            <div className='p-2 text-dark bg-opacity-10'>
                <Routes>
                    <Route path="/trello/:id" element={<Trello logo={logo} countId={countId} setCountId={setCountId}></Trello>}></Route>
                    <Route path="/" element={<LandingPage logo={logo} />}></Route>
                    <Route path="/gladiator" element={<LandingPage logo={logo}/>}></Route>
                </Routes>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
    )
}
export default App;
