import mongoose, { Schema } from "mongoose";

const medicalRecordSchema = new mongoose.Schema({

}, { timestamps: true })

export const MedicalRecord = Schema.model("MedicalRecord", medicalRecordSchema)