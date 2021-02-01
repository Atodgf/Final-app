import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import authRoutes from './routes/authRoutes'
import requireToken from './middleware/requireToken'

const mongoUrl = "mongodb+srv://admin:admin@cluster0.kgu4c.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = 3000
const app = express()

app.use(authRoutes)

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo!')
})

mongoose.connection.on('error', (err)=>{
    console.log('this is error', err)
})

app.use(bodyParser.json())

app.get('/', requireToken, (req, res)=>{
    res.send("you logged in!")
})

app.listen(PORT, ()=>{
    console.log("Server running on: "+ PORT)
})