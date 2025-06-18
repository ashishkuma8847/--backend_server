import express from "express"
import { addToCart } from "../controller/cart.controller.js"

const cartRouter= express.Router()
cartRouter.post("/addToCart",addToCart)

export default cartRouter