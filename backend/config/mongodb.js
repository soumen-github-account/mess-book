import mongoose from "mongoose";

const connevtDb = async()=>{
    mongoose.connection.on('connected', ()=>
        console.log("database connected")
    );
    
    await mongoose.connect(process.env.MONGODB_URI)
}
export default connevtDb;