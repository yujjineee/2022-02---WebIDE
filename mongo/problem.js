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
    "input_example": { 
        type: String, 
        required: true 
    },
    "output_example": { 
        type: String, 
        required: true 
    },
})


const Problem = mongoose.model('Problem', problemSchema)
//다른 파일에서도 모듈을 쓸 수 있게
module.exports = { Problem }