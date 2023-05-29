const mongoose = require("mongoose")


//  This Mongoose Function is Asynschronous so  we will be useing async and await keyword
const taskSchema = new  mongoose.Schema({
    name:{
        type : String ,
        required:[true , "Please Provide the name"] ,
        trim:true,
        maxlength : [20 , "cannot be more than 20 "]
    },

    completed : {
        type : Boolean ,
        default : false
    }
})
const Tank_model = mongoose.model('Task' , taskSchema)
module.exports = Tank_model