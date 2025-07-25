import mongoose, { Schema } from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine1: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    specializedIn: [{
        type: String
    }]
}, { timestamps: true })

export const Hospital = Schema.model("Hospital", hospitalSchema)