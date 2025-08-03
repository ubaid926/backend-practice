// import { string } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String
    }
    , password: {
        type: String
    }
},
 { timestamps: //true 
       {
    createdAt: "timeOfCreate",
    updatedAt: "timeOfUpdate"
} 
})
export const User = mongoose.model("User", userSchema)