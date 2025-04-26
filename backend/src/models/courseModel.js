const mongoose = require("mongoose");



const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dr: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dr" }],

    attendance: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            daysAttended: { type: Number, default: 0 }
        }
    ]
});




const Course = mongoose.model("Course", courseSchema);

module.exports = { Course };
