import axios from 'axios'

const baseUrl = "http://localhost:4000"

const getAllToDo = (setTodo) =>{
    axios
    .get(baseUrl)
    .then((data)=>{
        console.log( 'data......>', data );
        setTodo(data.data)
    })

}

const addToDo = (text, setText, setToDo) =>{

    axios
    .post(`${baseUrl}/add`,{text})
    .then((data)=>{
        console.log(data.data);
        setText("")
        getAllToDo(setToDo)
    }).catch((err)=> console.log(err))
}

const updateToDo = (toDoId, text, setText, setToDo, setIsUpdate) =>{

    axios
    .post(`${baseUrl}/update`,{_id: toDoId, text})
    .then((data)=>{
        console.log(data.data);
        setText("")
        setIsUpdate(false)
        getAllToDo(setToDo)
    }).catch((err)=> console.log(err))
}

const deleteToDo = (_id, setToDo)=>{
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data.data);
        getAllToDo(setToDo)
    }).catch((err)=> console.log(err))

}

export {getAllToDo, addToDo, updateToDo, deleteToDo}

