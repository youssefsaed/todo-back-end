import mongoose, { Types } from "mongoose";

const todoSchema= new mongoose.Schema({
title:String,
description:String,
status:{
   type:String,
   enum:['pending','complete'],
   default:'pending' ,  
},
createdBy:{
    type:Types.ObjectId,
    ref:'user'
}
},{timestamps:true})

export const todoModel=mongoose.model('todo',todoSchema)