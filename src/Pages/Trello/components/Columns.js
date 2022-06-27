import ColumnCards from './Cards';
import React from 'react';

function AllColumns({columnsData, setcolumnsData, countId, setCountId}){
  
    function addColumn(ev){
        setcolumnsData(function (oldDataObject) {
            console.log('setcolumnsData', oldDataObject)
            let dataArray = oldDataObject.data
            let newId = dataArray.length + 1
            dataArray.push(
                {
                    name: "Column " + newId,
                    id: 'column' + newId,
                    cards: []
                }
            )
            return {
                ...oldDataObject,
                data: dataArray
            }
        })
        
    }
    return (
        <div>        
            <div className='flex'>
                {
                columnsData.data.map(columnObject => {
                    return <Column key={columnObject.id} setCountId={setCountId} countId={countId} columnObject={columnObject} />
                })
            }
            <button onClick={addColumn}>Update</button>
        </div>
    </div>
    )
}

function Column({columnObject, countId, setCountId}){
    let [cardsArray, setData] = React.useState(columnObject.cards)
    
    function addCard(ev){
        let buttonId = ev.target.id
        let textarea = document.getElementById('newCardText' + buttonId)
        let newCardText = textarea.value
        if(newCardText.length > 0){
            textarea.value = ""
            setCountId(countId => countId+1)
            setData(function (cardsArray) {
                    cardsArray.push({
                        name: newCardText,
                        id:countId,
                    });
                    return cardsArray;
                })
        }
    }
    return (
    <div onDrop={drop} onDragOver={allowDrop} className="parentDrop horiz-scroll p-5 bg-primary bg-opacity-25">
        <div id={columnObject.id} className="parentDrop column rounded bg-secondary bg-opacity-25 p-3">
            <b className='siblingDrop'>{columnObject.name}</b>
            <div className='allowDrop' >
                <ColumnCards cardsData={cardsArray}/>
            </div>
            <textarea id={"newCardText"+columnObject.id} placeholder="Ввести заголовок для этой карточки" className="my-2 form-control siblingDrop"></textarea>
            <button id={columnObject.id} onClick={addCard} className="siblingDrop btn btn-primary btn-sm">
                Добавить карточку
            </button>
        </div>
    </div>
    )
}


function drop(ev){
    var data = ev.dataTransfer.getData("text");
    let classList = ev.target.classList
    let moveCard = document.getElementById(data)
    if(classList.contains('allowDrop')){
        ev.target.appendChild(moveCard);    
    }
    else if(classList.contains('ticket')){
        ev.target.after(moveCard);    
    }
    else if(classList.contains('card')){
        ev.target.parentNode.after(moveCard);
    }
    else if(classList.contains('parentDrop')){
        ev.target.getElementsByClassName('allowDrop')[0].prepend(moveCard)
    }
    else if(classList.contains('siblingDrop')){
        ev.target.parentNode.getElementsByClassName('allowDrop')[0].prepend(moveCard)
    }
    ev.preventDefault();
}
function allowDrop(ev) {
    ev.preventDefault();
}
export default AllColumns