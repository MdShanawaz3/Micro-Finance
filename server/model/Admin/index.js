import mongoose from "mongoose";

let adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "admin"
    }
});

export default mongoose.model("adminModel", adminSchema, "admin");