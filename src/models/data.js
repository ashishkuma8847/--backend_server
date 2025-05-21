import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Data = sequelize.define("Data", {
  heading: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  other: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
export default Data;
