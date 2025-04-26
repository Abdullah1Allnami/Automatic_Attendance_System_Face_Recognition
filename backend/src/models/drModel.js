const mongoose = require("mongoose");


const drSchema = new mongoose.Schema({
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }]
});

const Dr = mongoose.model("Dr", drSchema);

module.exports = { Dr }