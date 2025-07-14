import express from "express"
import commentPost from "./post.js"

const router = express.Router()
router.post("/", commentPost)

export default router