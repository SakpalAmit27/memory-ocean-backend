import mongoose from 'mongoose'


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
})

const usermodel = mongoose.model('usermodel',userSchema);
// exporting our schema and model // 

export default usermodel

