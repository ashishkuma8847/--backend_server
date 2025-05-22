import sequelize from "../config/db.js";
import { DataTypes, json } from "sequelize";

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    originalPrice: {
      type: DataTypes.FLOAT,
    },
    discountPercent: {
      type: DataTypes.INTEGER,
    },
    availability: {
      type: DataTypes.STRING,
      defaultValue: "In stock",
    },
    category: {
      type: DataTypes.STRING,
    },
    freeShipping: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    selectedColor: {
      type: DataTypes.STRING,
    },

    selectedSize: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        //return JSON.parse(this.getDataValue("selectedSize") || "[]");
        const value = this.getDataValue("selectedSize");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("selectedSize", JSON.stringify(value));
      },
    },

    color: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("color");
        return value ? JSON.parse(value) : [];
      },
      set(value) {
        this.setDataValue("color", JSON.stringify(value));
      },
    },

    description: {
      type: DataTypes.TEXT,
    },
    thumbnailIndex: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default Product;

// Product.sync({force:true}).then(()=>console.log("product was clear"))