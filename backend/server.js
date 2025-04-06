import express from 'express'

import cors from 'cors'
import 'dotenv/config'
import connevtDb from './config/mongodb.js'
import userRouter from './routes/userRoute.js'
import messRouter from './routes/messRoute.js'
import connectCloudinary from './config/cloudinary.js'



const app = express()
const port = process.env.PORT || 8000

connevtDb();
connectCloudinary()
// middleware
app.use(express.json())
app.use(cors())


app.use('/api/user',userRouter)
app.use('/api/admin',messRouter)

app.get('/',(req,res)=>{
    res.send("api working");
})

app.listen(port, ()=>{
    console.log("app is started in",port)
})