const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const problemSchema = new Schema({

    "num": {
        type: Number,
        required: true
    },
    "title": { 
        type: String, 
        required: true 
    },
    "problem": { 
        type: String, 
        required: true 
    },
    "problem_input": {
        type: String, 
        required: true 
    },
    "problem_output": {
        type: String, 
        required: true 
    },
    "input_example": { 
        type: String, 
        required: true 
    },
    "output_example": { 
        type: String, 
        required: true 
    },
})


var Problem = mongoose.model('problem', problemSchema)
module.exports = Problem


