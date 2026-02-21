const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        default: ""
    },

    role: {
        type: String,
        enum: ["tenant", "owner"],
        default: "tenant"
    },

    bio: {
        type: String,
        default: ""
    }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
