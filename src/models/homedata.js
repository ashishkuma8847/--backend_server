import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const homeData = sequelize.define("homeData", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalPrice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discountPercent: {
    type: DataTypes.STRING,
    allowNull: false,
  },
   images: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default homeData;

// Data.sync({force:true})
