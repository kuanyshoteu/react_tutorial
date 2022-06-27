import Header from './components/Header';
import AllColumns from './components/Columns';
import Task from './components/Task';
import Modal from './components/Modal';
import React from 'react';
import data from './components/data';


export const ManagerContext = React.createContext(null);
function Trello() {
    
    let [countId, setCountId] = React.useState(10)
    let [columnsData, setcolumnsData] = React.useState(
        {data: data})
    let [cardNameModal, setCardNameModal] = React.useState("Yo")
    
    let [randomuser, setRandomUser] = React.useState({})
    
    return (
        <ManagerContext.Provider value={setCardNameModal}>
            <div id='mainScreen'>
                
                <Header />
                <AllColumns  columnsData={columnsData} setcolumnsData={setcolumnsData} countId={countId} setCountId={setCountId}/>
                <Task></Task>
            </div>
            <Modal cardNameModal={cardNameModal} />
        </ManagerContext.Provider>
    )
}
export default Trello;
