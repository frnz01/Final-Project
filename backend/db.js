const mongoose = require('mongoose')

var mongoURL = 'mongodb+srv://franzdulnuan9:Panpan-2001@cluster0.drxk9ub.mongodb.net/hotel-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error', ()=>{
    console.log('Mongo DB Connection Failed')
})

connection.on('connected', ()=>{
    console.log('Mongo DB Connection Successfull')
})

module.exports = mongoose