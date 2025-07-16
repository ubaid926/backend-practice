import mongoose from "mongoose"
import 'dotenv/config' 

const url=`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ubaidraza.s8wzcp3.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=ubaidraza`

mongoose.connect(url)

export default mongoose