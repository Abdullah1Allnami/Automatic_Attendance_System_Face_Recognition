const express = require('express')
const { getAllDrs, getDrById, createDr, updateDr, deleteDr } = require('../controllers/drController')

const router = express.Router()

router
    .route('/')
    .get(getAllDrs)
    .post(createDr)


router
    .route('/:id')
    .get(getDrById)
    .delete(deleteDr)
    .patch(updateDr)

module.exports = router