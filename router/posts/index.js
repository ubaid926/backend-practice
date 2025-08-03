import express from "express"
import post from "./post.js"
import get from "./get.js"
import deletePost from "./delete.js"
import updatePost from "./update.js"
import patchPost from "./patch.js"

const router=express.Router()
router.post("/", post)
router.get("/", get)
router.delete("/:id",deletePost)
router.put("/:id",updatePost)
router.patch("/:id",patchPost)

export default router