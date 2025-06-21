import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Product from "./product.items.js";

const Cart = sequelize.define("Cart", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

Cart.belongsTo(Product, { foreignKey: "productId" });

export default Cart;
// Cart.sync({force:true}).then(()=>console.log("product was clear"))
