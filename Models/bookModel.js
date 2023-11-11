import mongoose from "mongoose";
const bookschema=new mongoose.Schema({
title:{
    type:String,
    required:true
},
author:{
    type:String,
    required:true
},
category:{
    type:String, 
    required:true 
},
year:{
    type:Number,
    required:true
},

})
export default mongoose.model('Book_Collection',bookschema,'Book_Collection')