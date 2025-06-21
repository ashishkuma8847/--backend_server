import express from "express"
import { addToCart, getCart } from "../controller/cart.controller.js"

const cartRouter= express.Router()
cartRouter.post("/addToCart",addToCart)
cartRouter.get("/getcart/:userId",getCart )
export default cartRouter