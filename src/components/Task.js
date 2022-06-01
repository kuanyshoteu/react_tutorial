function work(){
    let row = []
    for(let  i = 1; i <=100; i++){
        let x = i + " " 
        row.push(x)
    }
    return row
}
export default function Task({person}){
    return (
        <div>
            <div className="name" id={person.id}>{person.name} {person.column}</div>
        </div>
    )
}

