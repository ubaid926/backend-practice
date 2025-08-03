import { User } from "../../models/user/index.js";
import bcrypt from "bcrypt"
import 'dotenv/config' 
import jwt from "jsonwebtoken";
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const checkPassword = bcrypt.compareSync(password, user.password)
            if (checkPassword) {
                var token = jwt.sign({email:user.email }, process.env.JWt_SECRET);
                // console.log(checkPassword, "check")
                res.status(200).send({ status: 200, message: "login successfully",token })
            } else {
                res.status(401).send({ status: 401, message: "password is not correct" })
            }
        } else {
            // console.log(user, "user")
            res.status(401).send({ status: 401, message: "user not found" })

        }


    } catch (err) {
        res.status(500).send({ status: 500, err })
        console.log(err)
    }
}
export default loginUser