import mongoose from "mongoose";

const favouriteSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    messId: {type: String, required: true},
    userData: {type: Object, required: true},
    messData: {type: Object, required: true},
    price: {type: Number, required: true},
    date: {type: Number, required: true},
    cancelled: {type: Boolean, default: false},
})

const favouriteModel = mongoose.models.messfav || mongoose.model('favourite_mess',favouriteSchema)

export default favouriteModel