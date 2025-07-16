import {User}  from "../../models/user/index.js"

const post=(req,res)=>{
   const user= new User(req.body)
   user.save()
   // console.log("req", req.body)
   res.send({
    status:200
   })
}
export default post