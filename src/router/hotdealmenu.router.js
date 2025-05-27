import express from "express"
import { createhotdeal, deletehotdeal, getallhotdeal, updatehotdeal } from "../controller/Hotdealmenu.controller.js"

const router = express.Router()

router.post("/createhotdeal",createhotdeal)
router.delete("/deleteonehotdeal/:id",deletehotdeal)
router.get("/getallhotdeal",getallhotdeal)
router.put("/updatehotdeal/:id",updatehotdeal)

export default router