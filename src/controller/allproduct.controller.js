import homeData from "../models/homedata.js";
import Data from "../models/homeitems.products.js";
import Hotdealmenu from "../models/hotdealmenu.js";
import Product from "../models/product.items.js";








export const getallproductsdata = async (req,res)=>{
    try {
        const data1 = await Hotdealmenu.findAll()
        const data2 = await homeData.findAll()
        const data3 = await Data.findAll()
        const data4 = await Product.findAll()
            
            res.status(200).json({message:"getallproduct",data1:data1,data2:data2,data3:data3,data4:data4})
        } catch (error) {
            res.status(400).json({message:"error",error:error.message}) 
        }
    }

