import express from "express"
import { addToCart, getCart, removeItem, updateItem } from "../controller/cart.controller.js"

const cartRouter= express.Router()
cartRouter.post("/addToCart",addToCart)
cartRouter.get("/getcart/:userId",getCart )
cartRouter.put("/cartupdate", updateItem);
cartRouter.delete("/cartremove", removeItem);
export default cartRouter