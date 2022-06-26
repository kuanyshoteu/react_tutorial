import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import Task from './components/Task';
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './components/data';
import React from 'react';

export const ManagerContext = React.createContext(null);
function App() {
    
    let [countId, setCountId] = React.useState(10)
    let [columnsData, setcolumnsData] = React.useState(
        {data: data})
    let [cardNameModal, setCardNameModal] = React.useState("Yo")
    
    let [randomuser, setRandomUser] = React.useState({})
    React.useEffect(() => {
        fetch('https://randomuser.me/api/', {
            method:"GET"
        }).then( response => response.json()).then(a => {
            console.log(a)
            setRandomUser(a)
        })
    }, [columnsData, countId])
    return (
        <ManagerContext.Provider value={setCardNameModal}>
            <div id='mainScreen'>
                <Header />
                <Trello  columnsData={columnsData} setcolumnsData={setcolumnsData} countId={countId} setCountId={setCountId}/>
                <Task></Task>
            </div>
            <Modal cardNameModal={cardNameModal} />
        </ManagerContext.Provider>
    )
}
export default App;
