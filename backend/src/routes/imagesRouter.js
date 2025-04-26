const express = require('express')
const { uploadImage } = require('../controllers/imageController')
const { upload } = require('./../../utils/uploadImage')

const router = express.Router()

router
    .route('/')
    .post(upload.single('image'), uploadImage)


module.exports = router