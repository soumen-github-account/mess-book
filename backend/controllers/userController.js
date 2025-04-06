import validator from 'validator'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import userModel from '../models/userModel.js'

import {v2 as cloudinary} from 'cloudinary'
import favouriteModel from '../models/favourite.js'
import messModel from '../models/messModel.js'


const registerUser = async(req,res)=>{
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.json({success: false, message: 'missing details'})
        }
        if(!validator.isEmail(email)){
            return res.json({success: false, message: 'Enter a valid email.'})
        }
        if(password.length < 3){
            return res.json({success: false, message: 'Enter minimum 3 digit password.'})
        }
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.json({success: false, message: "user already exists"})
        }
        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new userModel({name, email, password: hashedPassword});
        await user.save();
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET );
        
        res.json({success: true, token})
    } catch (error) {
        res.json({success: false, message: error.message})
        
    }
}

// api for user login

const loginUser = async (req,res)=>{
    
    try{

        const {email, password}=req.body;

        if(!email || !password){
            return res.json({secess: false, message: 'Email and password are required'})
        }

        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success: false, message:'invalid email'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(isMatch){
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET );
            return res.json({success: true, token})
        } else{
            return res.json({success: false, message:'invalid password'})
        }

    }catch(error){
        res.json({seccess: false, message: error.message})
    }
}

// api for get user profile

const getProfile = async(req,res)=>{
    try {
        const { userId } = req.body
        const userData = await userModel.findById(userId).select('-password')

        res.json({success: true, userData})

    } catch (error) {
        res.json({seccess: false, message: error.message})
        
    }
}

// API to update user profile

const updateProfile = async(req,res)=>{
    try {
        const { userId,name,phone,address,dob,gender } = req.body
        const imageFile = req.file
        if(!name || !phone || !address || !dob || !gender){
            return res.json({success:false, message:"data missing"})

        }
        await userModel.findByIdAndUpdate(userId,{name,phone,address:JSON.parse(address),dob,gender})
        if(imageFile){
            // uploadimage to cloudinary
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type:"image"})
            const imageUrl = imageUpload.secure_url

            await userModel.findByIdAndUpdate(userId,{image:imageUrl})

        }
        res.json({success:true, message:"profile updated"})
    } catch (error) {
        res.json({seccess: false, message: error.message}) 
    }
}
// api to book Apointment

const messFavourite = async(req, res)=>{
    
    try {
        const {userId, messId, price }=req.body

        const messData = await messModel.findById(messId).select('-password')

        if(!messData.avilable){
            return res.json({success: false, message: "Mess is not available"})
        }

        const userData = await userModel.findById(userId).select('-password')

        
        const favouriteData = {
            userId,
            messId,
            userData,
            messData,
            price,
            date: Date.now()
        }
        const newFavouriteMess = new favouriteModel(favouriteData)
        await newFavouriteMess.save()

    
        res.json({success: true, message: "Added to wishlist"})

    } catch (error) {
        res.json({seccess: false, message: error.message})
        
    }
}


// api to get user appointment

const listFavourite = async(req, res)=>{
    try {
        
        const {userId} = req.body
        const favouritelist = await favouriteModel.find({userId})
        res.json({success: true, favouritelist})

    } catch (error) {
        res.json({seccess: false, message: error.message})
        
    }
}
export { registerUser,loginUser,getProfile,updateProfile,messFavourite,listFavourite }