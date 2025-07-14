import mongoose, { Schema } from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    daignosedWith: {
        type: String,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    gender: {
        required: true,
        enum: ["M", "F", "O"],
        type: String
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, { timestamps: true })

export const Patient = Schema.model("Patient", patientSchema)