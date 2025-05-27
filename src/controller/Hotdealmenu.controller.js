import Hotdealmenu from "../models/hotdealmenu.js";


 
export const createhotdeal = async (req, res) => {
  try {
    const newProduct = await Hotdealmenu.create(req.body);
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const updatehotdeal = async (req, res) => {
  try {
    const product = await Hotdealmenu.findByPk(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    await product.update(req.body);
    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};




export const getallhotdeal = async (req,res)=>{
    try {
        const data = await Hotdealmenu.findAll()
        if(!data)return res.status(400).json({message:"data not created"})
            
            res.status(200).json({message:"getallproduct",data:data})
        } catch (error) {
            res.status(400).json({message:"error",error:error.message}) 
        }
    }


    export const deletehotdeal = async (req, res) => {
      try {
        const product = await Hotdealmenu.findByPk(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
    
        await product.destroy({where:{}});
        res.status(200).json({ message: "Product deleted."});
      } catch (error) {
        res.status(500).json({ message: "Error deleted product", error });
      }
    };
