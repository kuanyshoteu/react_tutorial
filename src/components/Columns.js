import ColumnCards from './Cards';
import React from 'react';

function Trello({data, countId, setcountId}){
    return (
        <div className='flex'>
            {
            data.map(columnObject => {
                return <Column key={columnObject.id} setcountId={setcountId} countId={countId} columnObject={columnObject} />
            })
        }
    </div>
    )
}

function Column({columnObject, countId, setcountId}){
    let [cardsArray, setData] = React.useState(columnObject.cards)
    
    function addCard(ev){
        console.log('b', cardsArray, countId)
        let textarea = document.getElementById("newCardText" + ev.target.id)
        let newName = textarea.value
        textarea.value = ""
        setcountId(countId => countId+1)
        setData((cardsArray2) => {
            cardsArray2.push({
                name: newName,
                id: "card" + countId,
            })
            return cardsArray2
        })
        console.log('a', cardsArray, countId)
    }
    return (
    <div className="horiz-scroll p-5 bg-primary bg-opacity-25">
        <div id={columnObject.id} className="column rounded bg-secondary bg-opacity-25 p-3">
            <b>{columnObject.name}</b>
            <div className='allowDrop' onDrop={drop} onDragOver={allowDrop}>
                <ColumnCards cardsData={columnObject.cards}/>
            </div>
            <textarea id={"newCardText"+columnObject.id} placeholder="Ввести заголовок для этой карточки" className="my-2 form-control"></textarea>
            <button id={columnObject.id} onClick={addCard} className="btn btn-primary btn-sm">
                Добавить карточку
            </button>
        </div>
    </div>
    )
}


function drop(ev){
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));    
    ev.preventDefault();
}
function allowDrop(ev) {
    ev.preventDefault();
}
export default Trello