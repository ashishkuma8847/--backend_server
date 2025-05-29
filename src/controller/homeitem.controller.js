import Data from "../models/homeitems.products.js"

export const createdata = async (req,res)=>{
    try {
const {name,price,originalPrice,discountPercent,raiting,hotdeal}=req.body
const user = await Data.create({name,price,originalPrice,discountPercent,raiting,hotdeal})
if(!user)return res.status(400).json({message:"data not created"})

    res.status(200).json({message:"data cerated successfully",name:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const deleteonedata = async (req,res)=>{
    try {
const {id}=req.params
const user = await Data.destroy({where:{id}})
if(!user)return res.status(400).json({message:"data not created"})

    res.status(200).json({message:"data cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const deletealldata = async (req,res)=>{
    try {
const user = await Data.destroy({where:{ }})
if(!user)return res.status(400).json({message:"data not created"})

    res.status(200).json({message:"data cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const getalldata = async (req,res)=>{
    try {
const user = await Data.findAll()
if(!user)return res.status(400).json({message:"data not created"})

    res.status(200).json({message:"data cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const getonedata = async (req,res)=>{
    try {
       
const user = await Data.findByPk(req.params.id)
if(!user)return res.status(400).json({message:"data not get"})

    res.status(200).json({message:"data get successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const updatedata = async (req,res)=>{
    try {
        const {id}= req.params
        const {name,price,originalPrice,discountPercent,raiting,hotdeal}=req.body
const user = await Data.findOne({where:{id}})
if(!user)return res.status(400).json({message:"data not created"})
 const datavalue =await Data.update({name,price,originalPrice,discountPercent,raiting,hotdeal},{where:{id}})
    res.status(200).json({message:"data cerated successfully",data:datavalue})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}