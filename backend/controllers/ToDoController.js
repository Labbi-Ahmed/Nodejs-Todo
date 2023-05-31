const ToDoModel = require('../models/ToDoModel')

module
.exports
.getToDo = async(req, res)=>{
    const toDo = await ToDoModel.find()

    res.send(toDo)
}

module.exports.saveToDo = async (req, res)=>{
    const {text} = req.body

    ToDoModel
    .create({text})
    .then((data)=>{
        res.send("Successfully add daot >>>>> "+ data)
    })
}

module.exports.updateToDo = async (req, res)=>{
    const {_id, text} = req.body

    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated successfully....."))
    .catch((err)=> console.log(err))
}

module.exports.deleteByIdToDo = async (req, res)=>{
    const {_id} = req.body

    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> 
    res.send("Deleted Successfully......."))
    .catch((err)=>console.log(err))
}