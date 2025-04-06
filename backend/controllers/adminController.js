
import validator from 'validator'
import bcrypt from 'bcryptjs'
import {v2 as cloudinary} from 'cloudinary'
import messModel from '../models/messModel.js'





// API for adding Doctor
const addMess = async(req, res)=>{
    try{
        const {name, email, password,messName, experience,messNumber, about, address,beds,prices,contact,latitute,longitute } = req.body
        const image = req.files.image[0]
        const image1 = req.files.image1[0]
        const image2 = req.files.image2[0]
        const image3 = req.files.image3[0]
        const image4 = req.files.image4[0]

        const images = [image1,image2,image3,image4].filter((item)=> item != undefined)

        // for input field missing
        if(!name || !email || !password ||  !experience || !about || !address){
           return res.json({success:false, message: "Missing Details"})
        }
        // for email validate
        if(!validator.isEmail(email)){
            return res.json({success:false, message: "Please Enter a validate Email"})
        }
        // for strong password
        if(password.length < 4){
            return res.json({success:false, message: "Please Enter a strong password"})
        }
        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary 
        const imageUpload = await cloudinary.uploader.upload(image.path, {resource_type:"image"})
        const imageUrl = imageUpload.secure_url
        
        let imagesUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path, {resource_type:"image"})
            return result.secure_url
            })
        )
        const messData = {
            name,
            email,
            messName,
            messNumber,
            image:imageUrl,
            images:imagesUrl,
            password:hashedPassword,
            beds:JSON.parse(beds),
            prices :JSON.parse(prices),
            contact,
            experience,
            about,
            address:JSON.parse(address),
            latitute,
            longitute,
            date:Date.now()
        }
        const newMess = new messModel(messData)
        await newMess.save()
        res.json({success:true, message: "Mess added"})
        // console.log({name, email, password, speciality, degree, experience, about, fees, address }, imageFile)


    } catch(error){
        console.log(error)
        res.json({success:false , message: error.message})
    }
}


export { addMess }