const { User } = require('../models/userModel')


const getAllStudents = async (req, res) => {
    try {
        const students = await User.find()
        return res.status(200).json({
            status: 'success',
            data: {
                students
            }
        })
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: 'Could not get Students'
        })
    }
}

const getStudent = async (req, res) => {
    try {
        const student = await User.findById(req.params.id)

        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student Not Found'
            })
        }
        return res.status(200).json({
            status: 'success',
            data: {
                student
            }
        })
    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

const addStudent = async (req, res) => {
    try {
        const newStudent = await User.create(req.body)

        res.status(201).json({
            status: 'success',
            data: {
                student: newStudent
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const deletStudent = async (req, res) => {
    try {
        const student = await User.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student not found'
            })
        }
        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await User.findByIdAndUpdate(req.params.id, req.body, {

            new: true,
            runValidators: true
        })

        if (!updatedStudent) {
            return res.status(404).json({
                status: 'fail',
                message: 'Student Not Found!'
            })
        }
        return res.status(200).json({
            status: 'success',
            data: {
                student: updatedStudent
            }
        })
    } catch (err) {
        return res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

module.exports = { getAllStudents, addStudent, getStudent, deletStudent, updateStudent }