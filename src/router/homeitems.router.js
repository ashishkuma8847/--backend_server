import { createdata, deletealldata, deleteonedata, getalldata, getonedata, updatedata } from "../controller/homeitem.controller.js"
import express from "express"

const router = express.Router()

router.post("/createdata",createdata)
router.delete("/deleteonedata/:id",deleteonedata)
router.delete("/deletealldata",deletealldata)
router.get("/getalldata",getalldata)
router.get("/getonedata/:id",getonedata)
router.put("/updatedata/:id",updatedata)

export default router