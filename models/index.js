const mongoose = require('mongoose')
const UserModel = require('./UserModel')
const { database_url } = require('../config')

const connectDb = () => mongoose.connect(database_url, { useNewUrlParser: true })

module.exports = { connectDb, UserModel }