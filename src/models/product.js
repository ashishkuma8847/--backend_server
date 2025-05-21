import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Product = sequelize.define("Product", {
   name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  originalPrice: {
    type: DataTypes.FLOAT
  },
  discountPercent: {
    type: DataTypes.INTEGER
  },
  availability: {
    type: DataTypes.STRING,
    defaultValue: "In stock"
  },
  category: {
    type: DataTypes.STRING
  },
  freeShipping: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  selectedColor: {
    type: DataTypes.STRING
  },
  selectedSize: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  description: {
    type: DataTypes.TEXT
  },
  thumbnailIndex: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
}, {
  timestamps: true, 
});

export default Product;
