const mongoose = require("mongoose");


const profileSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imagepath:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model("profiles",profileSchema)