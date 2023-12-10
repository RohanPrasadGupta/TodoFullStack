import mongoose from "mongoose";


const UserAdd = mongoose.Schema({
    name : String,
    email :  {
        type : String,
        unique : true
    },
    password : {
        type : String,
        select : false
    },
    createdAt : {
        type : Date,
        default : Date.now,
    }
})


export const UserAddSchema = mongoose.model('registerUser',UserAdd)





