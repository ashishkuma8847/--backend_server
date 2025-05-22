import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Common = sequelize.define("Common", {
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  textsize: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});
export default Common;
