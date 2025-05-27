import express from "express"
import { createhotdealside, deletehotdealside, getallhotdealside, updatehotdealside } from "../controller/Hotdealsidemenu.controller.js"

const router = express.Router()

router.post("/createhotdealside",createhotdealside)
router.delete("/deleteonehotdealside/:id",deletehotdealside)
router.get("/getallhotdealside",getallhotdealside)
router.put("/updatehotdealside/:id",updatehotdealside)

export default router