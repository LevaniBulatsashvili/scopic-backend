const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

const app = require('./app')

const DB = 'mongodb+srv://admin:admin@cluster0.ajgs4.mongodb.net/scopic?retryWrites=true&w=majority'

mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('DB connection successful'))

const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})
