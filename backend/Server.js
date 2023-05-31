const express = require('express')
const mongoose = require('mongoose')

const routers = require('./routers/ToDoRoute')
const secondRouter = require('./routers/SecondRouter')
const cors = require('cors')

require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())

app.use(cors())

mongoose.connect(process.env.MONGODB_URL).then(()=> console.log(`Connected To Mongodb`)).catch((err)=>console.log(err))

app.use(routers)


app.listen(PORT,()=> console.log(`Listening port: ${PORT}`))

