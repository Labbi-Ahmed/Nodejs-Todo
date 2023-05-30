const {Router} = require("express")
const {getToDo, saveToDo, updateToDo, deleteByIdToDo} = require('../controllers/ToDoController')

const router = Router()

router.get('/', getToDo)
router.post('/add', saveToDo)
router.put('/upd', updateToDo)
router.delete('/dlt', deleteByIdToDo)

module.exports = router