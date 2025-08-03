import 'dotenv/config'
import jwt from "jsonwebtoken"
const authToken = (req, res, next) => {
    try {
        if (req.headers?.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            var decoded = jwt.verify(token, process.env.JWt_SECRET);
            if (decoded) {
                // res.status(200).send({ status: 401, message: "token is verified" })
                next()
            }
            else {
                res.status(401).send({ status: 401, message: "token is not verified" })
            }
        }
        else {
            res.status(401).send({ status: 401, message: "token not available" })
        }
        
    } catch (err) {
        res.status(500).send({ status: 500, err })
        console.log(err)
    }
}

export default authToken