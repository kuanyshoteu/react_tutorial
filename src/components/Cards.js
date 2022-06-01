
function ColumnCards({cardsData}){
    return (
        <div>
            {
                cardsData.map(cardObject => {
                    return <Card cardObject={cardObject} />
                })
            }
        </div>
    )
}

function Card({cardObject}){
    return(
    <div id={cardObject.id} onDragStart={drag} draggable="true" className="ticket my-2">
        <div className="bg-white py-1 px-3 shadow-sm rounded">
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