import express from 'express'
import { getProfile, listFavourite, loginUser, messFavourite, registerUser, updateProfile } from '../controllers/userController.js'

import authUser from '../middlewares/authUser.js'
import upload from '../middlewares/multer.js'

const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login',loginUser)

userRouter.get('/get-Profile',authUser,getProfile)
userRouter.post('/update-profile',upload.single('image'),authUser,updateProfile)
userRouter.post('/book-appointment',authUser,messFavourite)
userRouter.get('/appointments',authUser, listFavourite)
export default userRouter