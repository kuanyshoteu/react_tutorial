import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './components/data';
import React from 'react';

function App() {
    // let x = React.useState(77)[0]
    // let f = React.useState(5)[1]
    let [number, setNumber] = React.useState(77)
    
    
    function update(){
        setNumber(oldNumber => {
            return oldNumber+5
        })
    }
    return (
        <div>
            <div id='mainScreen'>
                <Header />
                <Trello data={data} />
                <Task></Task>
                
                <div className='text-center'>{number}</div>
                <button onClick={update}>Update</button>


                <button onClick={show_modal} className='btn btn-warning'>Show Modal</button>
            </div>
            <div id='modalScreen' onClick={hide_modal} className='modalScreen hidden'>
                <div className='modalBox'>
                    <a id='closeIcon' onClick={hide_modal} className='closeIcon'>x</a>
                    <button className='btn btn-primary'>It works</button>
                </div>
            </div>
        </div>
    )
}
function show_modal(){
    let modal = document.getElementById('modalScreen')
    let main = document.getElementById('mainScreen')
    modal.classList.remove('hidden')
    main.classList.add('blur-in')
}
function hide_modal(event){
    if(event.target.id == "modalScreen" || event.target.id == "closeIcon"){
        let modal = document.getElementById('modalScreen')
        let main = document.getElementById('mainScreen')
        modal.classList.add('hidden')
        main.classList.remove('blur-in')
    }
}












// 19:05 
function Hundred(){
    var buttons = [] 
    for(var i = 0; i < 100; i++){
        var button = <button className='menuLink'>Privet + {i}</button>
        buttons.push(button)
    }
    return buttons
}



export default App;
