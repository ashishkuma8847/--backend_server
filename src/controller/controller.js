import User from "../models/user.js";
import Data from "../models/data.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";
import Product from "../models/product.js";
const sec = process.env.SECRET_KEY


export const signup = async (req,res)=>{
    try {
        const {name,email,password}=req.body
        const data = await User.findOne({where:{email}})
        if(data) return res.status(400).json({message:"user alrady exist"}) 
        
        const hashdata = await bcrypt.hash(password,10)
        if(!hashdata) return res.status(400).json({message:"password not hash"})
            
            const user = await User.create({name,email,password:hashdata})
            if(!user)return res.status(400).json({message:"user not cerater",user:user}) 
                res.status(201).json({message:"user created",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password}=req.body
        const data = await User.findOne({where:{email}})
        if(!data) return res.status(400).json({message:"user is not found"}) 
        
        const compare = await bcrypt.compare(password,data.password)
        if(!compare) return res.status(400).json({message:"password not matched.."})
            
           const jst= jwt.sign({id:data.id,email:data.email},sec,{expiresIn:"1h"})
            res.status(201).json({message:"login successfull",token:jst}) 

    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
    }
}

export const createuser = async (req,res)=>{
    try {
const {name ,email,password}=req.body
const user = await User.create({name,email,password})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}



export const deleteone = async (req,res)=>{
    try {
const {id}=req.params
const user = await User.destroy({where:{id}})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const deleteall = async (req,res)=>{
    try {
const user = await User.destroy({where:{ }})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

export const getall = async (req,res)=>{
    try {
const user = await User.findAll()
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const getone = async (req,res)=>{
    try {
        const {id}= req.params
const user = await User.findOne({where:{id}})
if(!user)return res.status(400).json({message:"user not created"})

    res.status(200).json({message:"user cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const update = async (req,res)=>{
    try {
        const {id}= req.params
        const {name,email,password}=req.body
const user = await User.findOne({where:{id}})
if(!user)return res.status(400).json({message:"user not created"})
 const data =await User.update({name,email,password},{where:{id}})
    res.status(200).json({message:"user cerated successfully",data:data})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}



//////////////////////////////////////////////

export const createdata = async (req,res)=>{
    try {
const {heading,title,value,other}=req.body
const user = await Data.create({heading,title,value,other})
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
        const {id}= req.params
const user = await Data.findOne({where:{id}})
if(!user)return res.status(400).json({message:"data not created"})

    res.status(200).json({message:"data cerated successfully",user:user})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}


export const updatedata = async (req,res)=>{
    try {
        const {id}= req.params
        const {heading,title,value,other}=req.body
const user = await Data.findOne({where:{id}})
if(!user)return res.status(400).json({message:"data not created"})
 const datavalue =await Data.update({heading,title,value,other},{where:{id}})
    res.status(200).json({message:"data cerated successfully",data:datavalue})
    } catch (error) {
        res.status(400).json({message:"error",error:error.message}) 
        
    }
}

////////////////////////////////////////////////////////

export const createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update(req.body);
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};




export const getallproduct = async (req,res)=>{
    try {
        const data = await Product.findAll()
        if(!data)return res.status(400).json({message:"data not created"})
            
            res.status(200).json({message:"getallproduct",data:data})
        } catch (error) {
            res.status(400).json({message:"error",error:error.message}) 
        }
    }


    export const deleteProduct = async (req, res) => {
      try {
        const product = await Product.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
    
        await product.destroy({where:{}});
        res.status(200).json({ message: "Product deleted."});
      } catch (error) {
        res.status(500).json({ message: "Error deleted product", error });
      }
    };



    // status code common = "200"  true , succcc
    
    