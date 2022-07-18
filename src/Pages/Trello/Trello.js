
import AllColumns from './components/Columns';
import Task from './components/Task';
import Modal from './components/Modal';
import React from 'react';
import data from './components/data';
import { useParams } from "react-router-dom";
import rocketImg from '../../rocket.jpg'
import Header from '../../CommonComponents/Header';

export const ManagerContext = React.createContext(null);
function Trello(props) {
    const { id } = useParams();




    let countId = props.countId
    let setCountId = props.setCountId
  
    
    let [columnsData, setcolumnsData] = React.useState(
        {data: data})
    let [cardNameModal, setCardNameModal] = React.useState("Yo")
    
    let [randomuser, setRandomUser] = React.useState({})
















    let initial = ["Task", "Task"]
    let indexedFunctions = []
    for(var i = 0; i < initial.length; i++){
        if (initial[i] == "Task"){
            indexedFunctions.push(<Task index={i}></Task>)
        } 
        if (initial[i] == "Section"){
            indexedFunctions.push(<Section index={i}></Section>)
        } 
        if (initial[i] == "Footer"){
            indexedFunctions.push(<Footer index={i}></Footer>)
        } 
    }





















    return (
        <ManagerContext.Provider value={setCardNameModal}>
            
            <div id='mainScreen'> 
                {b}
            </div>
            <Modal cardNameModal={cardNameModal} />
        </ManagerContext.Provider>
    )
}
export default Trello;
