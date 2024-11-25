const express = require('express')
const cors = require('cors');
const { db } = require('./db/db');
const userRoute = require('./routes/user')
const transactions = require('./routes/transactions')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/api/user', userRoute)
app.use('/api/transactions', transactions)


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()