import ColumnCards from './Cards';



function Trello({data}){
    return (
    <div className='flex'>
        {
        data.map(columnObject => {
            <Column columnObject={columnObject} />
        })
        }
    </div>
    )
}
function Column({columnObject}){
    return (
    <div className="horiz-scroll p-5 bg-primary bg-opacity-25">
        <div id={columnObject.id} className="column rounded bg-secondary bg-opacity-25 p-3">
            <b>{columnObject.name}</b>
            <div className='allowDrop' onDrop={drop} onDragOver={allowDrop}>
                <ColumnCards cardsData={columnObject.cards}/>
            </div>
            <textarea placeholder="Ввести заголовок для этой карточки" class="my-2 form-control"></textarea>
            <button class="btn btn-primary btn-sm">
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