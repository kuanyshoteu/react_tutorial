import React from 'react';
import { ManagerContext } from "../App";

function ColumnCards({setCardNameModal, cardsData}){
    return (
        <React.Fragment>
            {
                cardsData.map(cardObject => {
                    return <Card key={cardObject.id} cardObject={cardObject} />
                })
            }
        </React.Fragment>
    )
}

function Card({cardObject}){
    const setCardNameModal2 = React.useContext(ManagerContext);
    function show_modal(){
        setCardNameModal2(cardObject.name)
        let modal = document.getElementById('modalScreen')
        let main = document.getElementById('mainScreen')
        modal.classList.remove('hidden')
        main.classList.add('blur-in')
    }
    return(
    <div onClick={show_modal} id={cardObject.id} onDragStart={drag} draggable="true" className="ticket my-2">
        <div className="card bg-white py-1 px-3 shadow-sm rounded">
            {cardObject.name}
        </div>  
    </div>
    )
}

function drag(ev){
    ev.dataTransfer.setData("text", ev.target.id);
    console.log(ev.dataTransfer)
}

export default ColumnCards