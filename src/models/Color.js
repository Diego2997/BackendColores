import { Schema,model } from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
    type:String,
    required:true
    },
    codigo:{
    type:String,
    required:false
    }
})

const Color = model('Color',colorSchema)
export default Color