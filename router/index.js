import express from "express"
import user from "./users/index.js"
import post from "./posts/index.js"
import comment from "./comments/index.js"


const router = express.Router()
router.use("/user", user)
router.use("/post", post)
router.use("/comment", comment)

export default router