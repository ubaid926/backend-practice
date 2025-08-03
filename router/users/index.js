import express from "express"
import postUser from "./post.js"
import loginUser from "./login.js"
import authToken from "../../auth.js"
import get from "./get.js"

const router = express.Router()
router.post("/", postUser)
router.get("/", authToken, get)
router.post("/login", loginUser)

export default router