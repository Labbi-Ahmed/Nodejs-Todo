const {Router} = require("express")
const {getToDo, saveToDo, updateToDo, deleteByIdToDo} = require('../controllers/ToDoController')

const router = Router()

router.get('/', getToDo)
router.post('/add', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteByIdToDo)

module.exports = router