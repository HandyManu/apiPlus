import { Schema,model } from "mongoose";

const reservacionesSchema = new Schema({

    ClientId: {
        type: Schema.Types.ObjectId,
        ref: "Clientes",
        required: true,
    },
    Vehicle:{
        type:String,
        required:true,
    },
    Service: {
        type: String,
        required:true,
    },
    Status:{
        type:String,
        required:true,
    },
   
},{
    timestamps:true,
    strict:false
})

export default model("Reservaciones",reservacionesSchema );