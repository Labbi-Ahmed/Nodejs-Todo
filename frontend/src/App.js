import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo , updateToDo} from "./utils/HandleApp";


function App() {


const [toDo, setTodo] = useState([])
const [text, setText] = useState("")
const [isUpdate, setIsUpdate] = useState(false)
const [toDoId, setToDoId] = useState("")

useEffect(()=>{
  getAllToDo(setTodo)
},[])

const updateModefun = (_id, text) => {
  setIsUpdate(true)
  setText(text)
  setToDoId(_id)
}



  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="search">
          <input
          type="text"
          className="todoAdd" 
          placeholder="Add ToDo...."
          value={text}
          onChange={(e)=> setText(e.target.value)}
          ></input>

          <div className="add" onClick={()=>
             isUpdate? 
             updateToDo(toDoId, text, setText, setTodo, setIsUpdate) 
             : addToDo(text, setText, setTodo)
             }>
            {isUpdate ? "Update": "Add"}
          </div>
        </div>
        <div className="list">
          
           {toDo.map((item)=>
            <ToDo key={item._id}
             text={item.text}
             updateMode={()=> updateModefun(item._id, item.text)} 
             deleteToDo={() => deleteToDo(item._id, setTodo)}
             />)}
        </div>
      </div>
    </div>
  );
}

export default App;
