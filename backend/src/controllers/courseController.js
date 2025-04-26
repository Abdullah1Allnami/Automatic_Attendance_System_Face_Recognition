const { Course } = require("../models/courseModel");

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate("dr users");
        return res.status(200).json({
            status: 'success',
            courses
        });
    } catch (error) {
        res.status(500).json({ status: 'fail', message: error.message });
    }
};

// Get course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate("dr users");
        if (!course) return res.status(404).json({
            status: 'fail',
            message: "Course not found"
        });
        return res.status(200).json({
            status: 'success',
            course
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Create a new course
const createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        const savedCourse = await course.save();
        return res.status(201).json({
            status: 'success',
            course: savedCourse
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Update course by ID
const updateCourse = async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate("dr users");

        if (!updatedCourse) return res.status(404).json({
            status: 'fail',
            message: "Course not found"
        });

        res.status(200).json({
            status: 'success',
            course: updatedCourse
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        });
    }
};

// Delete course by ID
const deleteCourse = async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({
            status: 'fail',
            message: "Course not found"
        });

        res.status(200).json({
            status: 'success',
            message: "Course deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: 'fail',
            message: error.message
        });
    }
};

module.exports = { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse };
