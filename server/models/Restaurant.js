const {Schema, model} = require('mongoose')

const Restaurant = new Schema({
    name:{type: String, unique:true, required:true},
    coords:{type:Array,default:[]},
    ratings: {
        type: Array,
        default: []
    },
    feedbacks: {
        type:Array,
        default:[]
    },
    description:{
        type:String,
        required: true
    }
})

module.exports = model('Restaurant', Restaurant)