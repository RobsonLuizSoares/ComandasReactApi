const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  email: { 
    type: String,
    required: false,
    lowercase: true
  }
})

  const Clients = mongoose.model('Clients', ClientsSchema)
  
  module.exports = Clients

