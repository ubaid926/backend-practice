

const postUser=(req,res)=>{
   console.log("req", req.body)
   res.send({
    status:200
   })
}
export default postUser