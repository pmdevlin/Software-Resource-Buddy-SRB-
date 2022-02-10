import express from "express";
import resourceRouter from "../routes/resource.js"

const router = express.Router()
router.use(resourceRouter)
export default router