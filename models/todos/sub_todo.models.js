import mongoose from "mongoose";

const subTodoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }


}, {
    timeStamps: true
})

export const SubTodo = mongoose.model('SubTodo', subTodoSchema)