const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    studentId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true, unique: true }
});


const User = mongoose.model("User", userSchema);


module.exports = { User }