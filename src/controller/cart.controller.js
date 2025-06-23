import Cart from "../models/Cart.js";
import Product from "../models/product.items.js";

// Add item to cart
export const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let item = await Cart.findOne({ where: { userId, productId } });
    // if(item.productId === productId) return     res.status(400).json({ message: "cart already added" });
console.log(item)
    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      item = await Cart.create({ userId, productId, quantity });
    }
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// // View cart`
export const getCart = async (req, res) => {
  try {
    const cartItems = await Cart.findAll({
      where: { userId: req.params.userId },
      include: [Product],
    });
if(!cartItems) {
  return  res.status(400).json({ message: "cart not find data" });

}

    res.status(200).json({ message: "cartitems fd", cartItems });

  } catch (err) {
    res.status(500).json({ message: err.message ,message2:req.params.userId});
  }
};

// // Update quantity
export const updateItem = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const item = await Cart.findOne({ where: { userId, productId } });
    if (item) {
      item.quantity = quantity;
      await item.save();
      res.json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Remove item
export const removeItem = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    await Cart.destroy({ where: { userId, productId } });
    res.json({ message: "Removed" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};