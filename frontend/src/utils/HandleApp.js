import axios from 'axios'

const baseUrl = "http://localhost:4000"

const getAllToDo = (setTodo) =>{
    axios
    .get(baseUrl)
    .then((data)=>{
        console.log( 'data......>' );
        setTodo(data.data)
    })

}

const addToDo = (text, setText, setToDo) =>{


}

export {getAllToDo, addToDo}

