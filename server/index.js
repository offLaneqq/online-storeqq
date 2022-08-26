require('dotenv').config()
const sequelize = require('./db')
const express = require('express')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')


const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())             // to send request from browser
app.use(express.json())     //parse json formate
app.use('/api', router)


app.get('/', (req, res) => {
    res.status(200).json({message: 'All OK.'})
})

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server started on ${PORT} port`))
    } catch (e) {
        
    }
}

start()
//npm run dev
