import mongoose from "mongoose";
const addressSchema =new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        Address:{
            street:{
                type:String,
                required:true
            },
            city:{
            type:String,
            required:true
            },
            Country:{
                type:String,
                required:true
            }

        }
    })
export default mongoose.model('City',addressSchema,'City')