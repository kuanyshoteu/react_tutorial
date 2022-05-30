import logo from './airplane.png';
import './App.css';
import Header from './components/Header';
import Trello from './components/Columns';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    let a = {
      name: "Alan",
      phone: "777",
      email: "alan@mail.com",
      img: "./airplane.png",
    }
    return (
        <div>
            <Header />
            <Trello />
            <Task person={a}/>
        </div>
    )
}













// 19:05 
function Hundred(){
    var buttons = [] 
    for(var i = 0; i < 100; i++){
        var button = <button className='menuLink'>Privet + {i}</button>
        buttons.push(button)
    }
    return buttons
}



export default App;
