import sequelize from "./src/config/db.js";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import  "./src/models/user.js";
import productrouter from "./src/router/productitems.router.js";
import homeitemsrouter from "./src/router/homeitems.router.js";
import userrouter from "./src/router/user.router.js";
import routerhd from "./src/router/homedatar.router.js";
import hotdealmenu from "./src/router/hotdealmenu.router.js";
import hotdealside from "./src/router/Hotdealsidemenu.router.js";

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log("port  is :" ,PORT)
})


async function connection() {
    try {
        await sequelize.authenticate()
        console.log("authenticate")
        await sequelize.sync({alter:true})
        console.log("sync")
    } catch (error) {
        console.error(error);
        
    }
}
connection()

app.use("/api",userrouter,routerhd,homeitemsrouter,productrouter,hotdealmenu,hotdealside)