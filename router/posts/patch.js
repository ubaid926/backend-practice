import { User } from "../../models/user/index.js";

const patchPost = async (req, res) => {
    try {
        const { id } = req.params
    //   const user= await User.findOneAndReplace({username:"ahmed"},req.body)
       await User.findByIdAndUpdate(id, req.body)
        res.status(201).send({ status: 201, message: "User partially Updated", user })
    }
    catch (err) {
        res.status(500).send({ status: 500, err })
    }
}
export default patchPost