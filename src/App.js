import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import Task from './components/Task';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './components/data';
import React from 'react';

function App() {
    
    let [countId, setCountId] = React.useState(10)
    
    let [columnsData, setcolumnsData] = React.useState({data: data})
    return (
        <React.Fragment>
            <div id='mainScreen'>
                <Header />
                <Trello columnsData={columnsData} setcolumnsData={setcolumnsData} countId={countId} setCountId={setCountId}/>
                <Task></Task>
            </div>
            <Modal />
        </React.Fragment>
    )
}


function Hundred(){
    var buttons = [] 
    for(var i = 0; i < 100; i++){
        var button = <button className='menuLink'>Privet + {i}</button>
        buttons.push(button)
    }
    return buttons
}

export default App;
