import Header from './components/Header';
import AllColumns from './components/Columns';
import Task from './components/Task';
import Modal from './components/Modal';
import React from 'react';
import data from './components/data';

import rocketImg from '../../rocket.jpg'

export const ManagerContext = React.createContext(null);
function Trello({logo}) {
    
    let [countId, setCountId] = React.useState(10)
    let [columnsData, setcolumnsData] = React.useState(
        {data: data})
    let [cardNameModal, setCardNameModal] = React.useState("Yo")
    
    let [randomuser, setRandomUser] = React.useState({})
    
    return (
        <ManagerContext.Provider value={setCardNameModal}>
            <div id='mainScreen'>
                
                
                <AllColumns  columnsData={columnsData} setcolumnsData={setcolumnsData} countId={countId} setCountId={setCountId}/>
                <Task></Task>
            </div>
            <Modal cardNameModal={cardNameModal} />
        </ManagerContext.Provider>
    )
}
export default Trello;
