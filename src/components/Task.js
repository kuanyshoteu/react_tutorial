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
            <div className="name">{person.name}</div>
            <div className="phone">{person.phone}</div>
            <div className="email">{person.email}</div>
            <img className="img" src={person.img}></img>
        </div>
    )
}

