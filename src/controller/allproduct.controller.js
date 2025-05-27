import homeData from "../models/homedata.js";
import Data from "../models/homeitems.products.js";
import Hotdealmenu from "../models/hotdealmenu.js";
import Hotdealsidemenu from "../models/hotdealsidemenu.js";
import Product from "../models/product.items.js";


 
export const createhotdealside = async (req, res) => {
  try {
    const newProduct = await Hotdealsidemenu.create(req.body);
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const updatehotdealside = async (req, res) => {
  try {
    const product = await Hotdealsidemenu.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update(req.body);
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};




export const getallproductsdata = async (req,res)=>{
    try {
        const data = await Hotdealsidemenu.findAll()
        const data1 = await Hotdealmenu.findAll()
        const data2 = await homeData.findAll()
        const data3 = await Data.findAll()
        const data4 = await Product.findAll()
        if(!data)return res.status(400).json({message:"data not created"})
            
            res.status(200).json({message:"getallproduct",data:data,data1:data1,data2:data2,data3:data3,data4:data4})
        } catch (error) {
            res.status(400).json({message:"error",error:error.message}) 
        }
    }


    export const deletehotdealside = async (req, res) => {
      try {
        const product = await Hotdealsidemenu.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
    
        await product.destroy({where:{}});
        res.status(200).json({ message: "Product deleted."});
      } catch (error) {
        res.status(500).json({ message: "Error deleted product", error });
      }
    };
