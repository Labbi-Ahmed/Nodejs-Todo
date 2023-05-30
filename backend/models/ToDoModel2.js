const mongoose = require('mongoose')

const todo2Schema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: String,
        require: true
    },
    cls:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('SecondTodo', todo2Schema)