import mongoose from "mongoose";

const messSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    messName :{type:String, required:true},
    image: {type:String, required:true},
    images: {type:Array, required:true},
    messNumber: {type:Number, required:true},
    experience: {type:String, required:true},
    about: {type:String, required:true},
    avilable: {type:Boolean, default:true},
    beds:{type:Array,required:true},
    prices:{type:Object, required:true},
    contact:{type:Number, required:true},
    address: {type:Object, required:true},
    latitute:{type:String, required:true},
    longitute:{type:String, required:true},
    date: {type:Number, required:true},
}, { minimize:false })

const messModel = mongoose.models.product || mongoose.model('messes', messSchema)

export default messModel