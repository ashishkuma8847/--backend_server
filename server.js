import sequelize from "./src/config/db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./src/models/users.js";
import productrouter from "./src/router/productitems.router.js";
import userrouter from "./src/router/user.router.js";
import routerhd from "./src/router/homedatar.router.js";
import path from "path";
import { dirname } from "./src/middleware/upload.js";
import cartRouter from "./src/router/cart.router.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

// const __filename = fileURLToPath  (import.meta.url);
// const __dirname = path.dirname(__filename);



app.use("/upload",express.static(path.join(dirname, "../../uploads/images/")));

async function connection() {
  try {
    await sequelize.authenticate();
    console.log("authenticate");
    await sequelize.sync({ alter: true });
    console.log("sync");
  } catch (error) {
    console.error(error);
  }
}
connection();

app.use(
  "/api",
  userrouter,
  routerhd,
  productrouter,
  cartRouter
);

app.listen(PORT, () => {
  console.log("port  is :", PORT);
});
