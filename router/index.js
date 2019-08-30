const router = require('express').Router()
const UserRouter = require('./UserRouter')

router.use('/users', UserRouter)

module.exports = router