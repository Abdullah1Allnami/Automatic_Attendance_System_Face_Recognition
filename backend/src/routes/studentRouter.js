const express = require('express')
const { getAllStudents, addStudent, getStudent, deletStudent, updateStudent } = require('../controllers/studentController')

const router = express.Router()

router
    .route('/')
    .get(getAllStudents)
    .post(addStudent)


router
    .route('/:id')
    .get(getStudent)
    .delete(deletStudent)
    .patch(updateStudent)

module.exports = router