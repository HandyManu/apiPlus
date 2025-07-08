
import { Schema,model } from "mongoose";

const clientesSchema = new Schema({

    Name: {
        type: String,
        required: true,
    },
    Email:{
        type:String,
        required:true,
    },
    Password: {
        type: String,
        required:true,
    },
    Phone:{
        type:String,
        required:true,
    },
    Age: {
        type: Number,
        required:true,
    },
   
},{
    timestamps:true,
    strict:false
})

export default model("Clientes",clientesSchema );