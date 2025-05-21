import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, 
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isAvailable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: true, 
});

export default Product;
