import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Hotdealmenu = sequelize.define("Hotdealmenu", {
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
   raiting: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  hotdeal: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default Hotdealmenu;

// Data.sync({force:true})
