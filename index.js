import express from "express"
import { userSchema } from "./joi/index.js"
import chalk from "chalk"
import router from "./router/index.js"
import mongoose from "./db/index.js"
const app = express()

app.use(express.json())

let users = []

app.use("/api" ,router)

mongoose.connection.on("error",(err)=>{
   console.log("database error",err)
})
mongoose.connection.on("open",()=>{
   console.log("database connected")
})

// app.use("/",(req,res,next)=>{
//      console.log(chalk.yellow("middleware"))
//      next()
// })

// app.get("/", (req, res) => {
//     res.send("hello")
// })
// app.get("/user", (req, res) => {
//     res.send(users)

// })

// app.put("/user/:id", (req, res) => {
//     const { id } = req.params
//     const index = users.findIndex(v => Number(id) === v.id)
//     users.splice(index, 1, { ...req.body, id })
//     res.send(users)
// })
// app.patch("/user/:id", (req, res) => {
//     const { id } = req.params
//     const index = users.findIndex(v => Number(id) === v.id)
//     users[index] = { ...users[index], ...req.body, id: users[index].id };
//     res.json(users[index]);
// })

// app.delete("/user/:id", (req, res) => {
//     const { id } = req.params
//     users = users.filter(v => v.id !== Number(id))
//     res.send({ message: "user deleted successfully", id })
// })

// app.post("/user", async(req, res) => {
//     try{
//     await userSchema.validateAsync(req.body)
//     users.push({ ...req.body, id: users.length + 1 })
//     res.send({
//         message: "user added successfully"
//     })}
//     catch(err){
//         res.send({error:err.details || "something went wrong"
//         })
//     }
// })

app.listen(2000, () => {
   console.log(chalk.white("server is running"))
})