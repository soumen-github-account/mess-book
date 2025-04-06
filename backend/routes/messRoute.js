import express from 'express'


import upload from '../middlewares/multer.js'
import { addMess } from '../controllers/adminController.js';
import { messList } from '../controllers/messController.js';

const messRouter = express.Router();

messRouter.post('/add',upload.fields([{name:"image",maxCount:1},{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addMess)
messRouter.get('/list',messList)
export default messRouter