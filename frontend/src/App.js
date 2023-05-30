import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo } from "./utils/HandleApp";


function App() {


const [toDo, setTodo] = useState([])
const [text, setText] = useState("hi")
useEffect(()=>{
  getAllToDo(setTodo)
},[])

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

          <div className="add" onClick={addToDo}>
            Add
          </div>
        </div>
        {/* <div>${text}</div> */}
        <div className="list">
          
           {toDo.map((item)=> <ToDo key={item._id} text={item.text}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
