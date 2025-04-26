const express = require('express')
const { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController')

const router = express.Router()

router
    .route('/')
    .get(getAllCourses)
    .post(createCourse)


router
    .route('/:id')
    .get(getCourseById)
    .delete(deleteCourse)
    .patch(updateCourse)

module.exports = router