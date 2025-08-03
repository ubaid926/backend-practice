import express from "express"
import commentPost from "./post.js"
import deleteComment from "./delete.js"


const router = express.Router()
router.post("/", commentPost)
router.delete("/:id", deleteComment)

export default router