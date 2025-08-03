import { User } from "../../models/user/index.js"
import bcrypt from "bcrypt"

const post = async (req, res) => {
   try {
      const password = bcrypt.hashSync(req.body.password, 10);
      const user = await User.create({ ...req.body, password })
      const data = user.toObject()
      delete data.password;
      res.status(201).send({ status: 201, user: data })
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