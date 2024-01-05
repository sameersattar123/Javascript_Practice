import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {

    },
    {
        timestamps : true
    }
)

export const Order = mongoose.model("Order" , OrderSchema)