import { User } from "../../models/user/index.js"
import bcrypt from "bcrypt"
import 'dotenv/config' 
import jwt from "jsonwebtoken";
const post = async (req, res) => {
   try {
      const password = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({ ...req.body, password })
      const data = user.toObject()
      delete data.password;
      var token = jwt.sign({email:user.email }, process.env.JWt_SECRET);
      res.status(201).send({ status: 201, user: data, token })
   } catch (err) {
      res.status(500).send({ status: 500, err })
   }

   // const user= new User(req.body)
   // user.save()
   // res.send({
   //  status:200
   // })
}
export default post