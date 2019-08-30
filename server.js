const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const { port } = require('./config')
const { connectDb } = require('./models')

app.use(express.json())
app.use(cors())
app.use('/', router)

connectDb().then(async () => {
  app.listen(port, () => console.log(`Server ready at ${port}`))
})