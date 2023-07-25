const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
      },
    name: String,
    email: String,
    phone: Number
})

module.exports = mongoose.model('User',UserSchema)