const mongoose = require('mongoose')
const taskschema = new mongoose.Schema({
    Task:{
        type: String,
        require: true
    },
    Duedate:{
        type: String,
        require: true
    },
    Description:{
        type: String,
        require: true
    },
    Priority:{
        type: String,
        require: true
    },
    Status:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Task',taskschema)