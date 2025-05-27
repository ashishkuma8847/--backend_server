import sequelize from "../config/db.js";
import { DataTypes, json } from "sequelize";

const Hotdealsidemenu = sequelize.define("Hotdealsidemenu", {
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
  reviews: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paragraph: {
    type: DataTypes.TEXT,
    allowNull: false,
    get(){
        const value= this.setDataValue("paragraph")
        return value ? JSON.parse(value):[]
    },
    set(value){
        this.setDataValue("paragraph",JSON.stringify(value))
    }
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
export default Hotdealsidemenu;

// Data.sync({force:true})
