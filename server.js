import sequelize from "./src/config/db.js";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import  "./src/models/user.js";
import router from "./src/router/router.js";

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

app.use("/api",router)