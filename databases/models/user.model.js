import mongoose, { Schema} from "mongoose";

const userSchema =new Schema({
    name:String,
    email:String,
    password:String,
    age:Number
},{timestamps:true})




const userModel=mongoose.model('user',userSchema)


export default userModel