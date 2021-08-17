require('dotenv').config()
const express = require('express')
const app = express()

const userRouter = require('./router/user')

// connected mongodb 
const connectDB = require('./config/database')
connectDB()

// connected router
app.use('/user', userRouter)

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))