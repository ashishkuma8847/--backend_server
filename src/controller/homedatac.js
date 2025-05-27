 import homeData from "../models/homedata.js";


 
export const createhomedata = async (req, res) => {
  try {
    const newProduct = await homeData.create(req.body);
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const updatehomedata = async (req, res) => {
  try {
    const product = await homeData.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update(req.body);
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};




export const getallhomedata = async (req,res)=>{
    try {
        const data = await homeData.findAll()
        if(!data)return res.status(400).json({message:"data not created"})
            
            res.status(200).json({message:"getallproduct",data:data})
        } catch (error) {
            res.status(400).json({message:"error",error:error.message}) 
        }
    }


    export const deletehomedata = async (req, res) => {
      try {
        const product = await homeData.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
    
        await product.destroy({where:{}});
        res.status(200).json({ message: "Product deleted."});
      } catch (error) {
        res.status(500).json({ message: "Error deleted product", error });
      }
    };
