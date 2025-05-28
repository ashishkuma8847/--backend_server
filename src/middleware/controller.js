import upload from "./upload.js"

export const middel = async (req,res)=>{
    try {
        const data = await upload.findAll()
        if(!data)return res.status(400).json({message:"data not created"})
            
            res.status(200).json({message:"getallproduct",data:data})
        } catch (error) {
            res.status(400).json({message:"error",error:error.message}) 
        }
    }
