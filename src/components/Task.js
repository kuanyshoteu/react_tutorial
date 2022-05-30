






function work(){
    let row = []
    for(let  i = 1; i <=100; i++){
        let x = i + " " 
        row.push(x)
    }
    return row
}
export default function Task({person}){
    let a = "Privet"
    let b = "Timur"
    let c = 15
    let d = 12
    return (
        <div>
            <div>{work()}</div>
            <div className="name">{person.name}</div>
            <div className="phone">{person.phone}</div>
            <div className="email">{person.email}</div>
            <img className="img" src={person.img}></img>
        </div>
    )
    // Задание 1: Привет Тимур
    // Задание 2: Привет Тимур 27
    // Задание 3: Все числа от 1 до 100, которые делятся на 7
    // Задание 4: Фор в отдельной функции
}

