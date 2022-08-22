const express = require('express')
const cors = require('cors')
const itemRouter = require('./routes/item.route')
const userRouter = require('./routes/user.route')

const app = express()
app.use(express.json())
app.use(cors({origin: '*'}));

// Routes
app.use('/api/v1/items', itemRouter)
app.use('/api/v1/user', userRouter)

module.exports = app
