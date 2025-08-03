import { User } from "../../models/user/index.js"

const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const user = await User.findByIdAndDelete(id)
        res.status(200).send({ status: 200, message: "User deleted" })
    } catch (err) {
        res.status(500).send({ status: 500, err })
    }
}
export default deletePost