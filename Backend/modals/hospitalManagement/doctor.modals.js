import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Doctor = mongoose.model("Doctor", DoctorSchema);
