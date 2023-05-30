const {Router} = require('express')

const {getSecondToDo,addSecondToDo,updateSecondToDo,deleteSecondToDo} =  require('../controllers/SecondTodoController')

const secondRouter = Router()

secondRouter.get('/getall', getSecondToDo)
secondRouter.post('/v2/add', addSecondToDo)
// secondRouter.put('/update', updateSecondToDo)
// secondRouter.delete('/delete', deleteSecondToDo)

module.exports = secondRouter