
const ToDoModel2 = require('../models/ToDoModel2')

module.exports.getSecondToDo = async (req, res)=>{
    const todo2 = await ToDoModel2.find()
    res.send(todo2)
    
}

module.exports.addSecondToDo = async (req, res)=>{
    const {name, age, cls} = req.body

    ToDoModel2.create({name, age, cls})
    .then((data)=>{
        console.log("Added Successfully ......");
        console.log(data);
        res.send(data)

    })

}

