import messModel from "../models/messModel.js"




const messList = async(req, res)=>{
    try {
        const messes = await messModel.find({}).select(['-password','-email'])

        res.json({success:true, messes})
    } catch (error) {
        console.log(error)
        res.json({success:false , message: error.message})
    }
}

export { messList }
