import { User } from "../../models/user/index.js";

const get = async (req, res) => {
    try {
        const users = await User.find();
        // const users = await User.find({
        //     username:"ali"
        // });
        // const users = await User.findById("687b8b8fa894fca20cab9282");
    //    await User.findByIdAndDelete("687b9c7986bc4d4ae3b79470");
        res.status(200).send({ status: 200, users })
    }
    catch (err) {
        res.status(500).send({ status: 500, err })
    }

}

export default get