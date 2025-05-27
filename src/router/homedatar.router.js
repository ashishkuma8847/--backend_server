import express from "express"
import { createhomedata, deletehomedata, getallhomedata, updatehomedata } from "../controller/homedatac.js"

const routerhd= express.Router()
routerhd.post("/createhomedata",createhomedata)
routerhd.delete("/deletehomedata/:id",deletehomedata)
routerhd.put("/updatehomedata/:id",updatehomedata)
routerhd.get("/getallhomedata",getallhomedata)

export default routerhd